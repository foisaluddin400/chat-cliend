import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase/Firebase";




export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (Auth, email, password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(Auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)

            // step-1 jwt api create
            
            setLoading(false)
        })
        return ()=> {
            unSubscribe();
        }
    },[])






const AuthInfo = {user, createUser, SignInUser,logOut,loading}

    return (
        <div>
           <AuthContext.Provider value={AuthInfo}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;