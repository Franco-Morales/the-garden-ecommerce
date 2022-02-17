import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

import { insertInFirestore } from "../services/firebaseSvc";


const singUp = async (formData) => {
    try {
        let { userEmail: email, userPwd: password, userName: name, userPhone: phone } = formData;

        const userCredentials = await createUserWithEmailAndPassword( auth, email, password );
        const user = userCredentials.user;

        await updateProfile(user, { displayName: name });

        await insertInFirestore("profiles", { email, name, phone, auth_id: user.uid });
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}

const logIn = async (formData) => {
    try {
        let { userEmail: email, userPwd: password } = formData;
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}


export { singUp, logIn, logOut}