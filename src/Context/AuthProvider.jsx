import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

    

    //Create User
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //Maintaing User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            
            fetch(`http://localhost:3000/user/${currentUser?.email}`)
            .then(res => res.json())
            .then(data =>{
                setUserInfo(data);
            })
            
            setLoading(false);
        });
        return ()=>{
            unSubscribe();

        }
    },[user])

    //Logout
    const logOutUser =()=>{
        return signOut(auth);
    }

    //Log In User
    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //Google SignIn
    const GoogleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }


    //Provider
    const authData = {
        user,
        setUser,
        createUser,
        logOutUser,
        loading,
        logInUser,
        GoogleLogIn,
        userInfo
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )

}

export default AuthProvider;