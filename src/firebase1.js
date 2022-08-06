import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsP7LFTR-64UVF6rSJAlEqByuewgRXa9M",
  authDomain: "auth-d60f6.firebaseapp.com",
  projectId: "auth-d60f6",
  storageBucket: "auth-d60f6.appspot.com",
  messagingSenderId: "259086218818",
  appId: "1:259086218818:web:f66c0fdd1bbbd29e895fdb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


const provider =new GoogleAuthProvider()

export const signInWuthGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        const name = result.user.displayName
        const email = result.user.email
        const profil= result.user.photoURL

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profil",profil);

        console.log("BRIJ KUMAR");
        console.log(window);
        window.location.href ="/timer";
    }).catch((error)=>{
        console.log(error);
    })
}
