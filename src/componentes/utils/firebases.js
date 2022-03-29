import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC759slHgN-ikoaAQw9c5wvJzKw_5q_otI",
    authDomain: "tienda-online1960.firebaseapp.com",
    projectId: "tienda-online1960",
    storageBucket: "tienda-online1960.appspot.com",
    messagingSenderId: "696848973112",
    appId: "1:696848973112:web:71050885658691ae3515cd"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
