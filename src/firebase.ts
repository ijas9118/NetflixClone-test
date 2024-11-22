import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOZozO3B9kTuPG2OH-g4t8VJGl0qr3rk0",
  authDomain: "netflix-clone-a0d1c.firebaseapp.com",
  projectId: "netflix-clone-a0d1c",
  storageBucket: "netflix-clone-a0d1c.firebasestorage.app",
  messagingSenderId: "199617519502",
  appId: "1:199617519502:web:aca04246b1d23c6b4ccedf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

const signup = async ({ name, email, password }: SignUpParams) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async ({ email, password }: LoginParams) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
