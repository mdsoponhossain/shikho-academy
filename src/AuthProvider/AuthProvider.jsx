import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState(null); 

 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false);
        console.log(currentUser)
    })
     return ()=>{
        unSubscribe();
     }
 },[])


    const HandleGoogleLogin =()=>{
        setLoading(true)
        const provider = new GoogleAuthProvider();
       return signInWithPopup(auth,provider);
    };

    const handleLogOut =()=>{
       return signOut(auth) ;
    }

  const handleFacebookLogin =()=>{
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }

  
  const handleTwitterLogin = ()=>{
      const provider = new TwitterAuthProvider();
      return signInWithPopup(auth,provider);
    }
    
    const authInfo ={
       HandleGoogleLogin,
       user,
       handleLogOut,
       handleFacebookLogin,
       handleTwitterLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;