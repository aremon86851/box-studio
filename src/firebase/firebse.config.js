import { initializeApp } from "firebase/app";
const firebaseConfig = {



    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId


    // apiKey: "AIzaSyBLKY9GBk6pEwYsgz4--y6qRsRkhRbadtQ",
    // authDomain: "assignment11-3419d.firebaseapp.com",
    // projectId: "assignment11-3419d",
    // storageBucket: "assignment11-3419d.appspot.com",
    // messagingSenderId: "447419524916",
    // appId: "1:447419524916:web:f366ad7d1b424696826761"
};

const app = initializeApp(firebaseConfig);
export default app