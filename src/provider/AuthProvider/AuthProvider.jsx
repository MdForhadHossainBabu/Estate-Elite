import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import auth from './../../firebase/firebase.config';
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic();

 // social provider 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

 // create user 
 const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
  }
  // update user
  const updateUser = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    });
  }

  // sign in user
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
    if (currentUser) {
      // TODO: get token & stored
      const userInfo = { email: currentUser.email };
      axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token',res.data.token )
          }
      })
    }
    else {
      // TODO: remove token
      localStorage.removeItem('access-token');

    }
   console.log('current user ==>>', currentUser);
   setLoading(false)
  })
  return () => unSubscribe()
 },[axiosPublic])


 // auth value 
 const authInfo = {
   user,
   loading,
   createUser,
   signIn,
   googleLogin,
   githubLogin,
   logOut,
   updateUser,
 };
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;