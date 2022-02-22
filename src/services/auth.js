import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

import { insertInFirestore } from "../services/firebaseSvc";


const singUp = async (formData) => {
    try {
        let { userEmail: email, userPwd: password, userName: name, userPhone: phone } = formData;

        const userCredentials = await createUserWithEmailAndPassword( auth, email, password );
        const user = userCredentials.user;

        await updateProfile(user, { displayName: name });

        await insertInFirestore("profiles", { email, name, phone, auth_id: user.uid , wishlist: []});

        return {
            status: "success",
            message: "Success sign up"
        }
    } catch (error) {
        return {
            status: "error",
            message: getErrorMessage(error.code)
        }
    }
}

const logIn = async (formData) => {
    try {
        let { userEmail: email, userPwd: password } = formData;
        await signInWithEmailAndPassword(auth, email, password);

        return {
            status: "success",
            message: "Success login"
        }
    } catch (error) {
        return {
            status: "error",
            message: getErrorMessage(error.code)
        }
    }
}

const logOut = async () => {
    try {
        await signOut(auth);
        return {
            status: "success",
            message: "Logout"
        }
    } catch (error) {
        return {
            status: "error",
            message: getErrorMessage(error.code)
        }
    }
}


const getErrorMessage = (firebaseErrorCode = "defualt") => {
    const errorMessage = {
        'auth/user-not-found': "User not found",
        'auth/invalid-email': "Invalid email format",
        'auth/wrong-password': "Incorrect password",
        'auth/email-already-in-use': "Email already in use",
        'auth/too-many-requests': "Try later",
        'auth/requires-recent-login': "Require sign in",
        'default': "Server error"
    }

    return errorMessage[firebaseErrorCode];
}


export { singUp, logIn, logOut };