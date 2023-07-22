"use client"
import { createContext , useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup
} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore";
import {  } from "firebase/auth";
import { auth , db , facebookProvider,googleProvider  } from "@/firebase";
import { useRouter } from 'next/navigation';

const UserContext = createContext()

export const AuthContextProvider = ({children})=>{
  
  const router = useRouter()
  const [user, setUser] = useState({});

    const signUp = (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db,'cart',email),{
          products : [] ,
        })
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=> {
        signOut(auth);
      }

      const singInByFacebook = async ()=>{
        signInWithPopup(auth,facebookProvider).then(res => {
           setDoc(doc(db,'cart',res?.user.email),{
            products : [] ,
          })
        })
        router.back()
      }

      const singInByGoogle = async ()=>{
        signInWithPopup(auth,googleProvider).then(result=>{
           setDoc(doc(db,'cart', result?.user.email),{
            products : [] ,
          })
        }).then(()=>{
          router.back()
        })
      }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      });
    
return(
 <UserContext.Provider
    value={{
        user,
        signUp,
        signIn,
        logOut,
        singInByFacebook,
        singInByGoogle
    }}
 >
{children}
</UserContext.Provider>
)
}
export const UserAuth = ()=>{
    return useContext(UserContext)
}