import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7jpqDKV6YQQyeNCeHCwlw8mxnXYbwHYc",
  authDomain: "the-garden-ecommerce.firebaseapp.com",
  projectId: "the-garden-ecommerce",
  storageBucket: "the-garden-ecommerce.appspot.com",
  messagingSenderId: "966562021919",
  appId: "1:966562021919:web:281bf08166fd7be67bcb2a"
};

const app = initializeApp( firebaseConfig );
const auth = getAuth(app);

const firebaseInit = () => app;


export { auth };
export default firebaseInit;