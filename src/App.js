import './App.css';
import WeeklyRems from './WeeklyRems'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHi2NLHHTcXfXEnPi8F8OcU1z0-SUFJY4",
  authDomain: "introductiontosw.firebaseapp.com",
  projectId: "introductiontosw",
  storageBucket: "introductiontosw.appspot.com",
  messagingSenderId: "592581466737",
  appId: "1:592581466737:web:dd1fbe58b5bb06a1e859d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  
  return (
    <div className="App">
      <WeeklyRems App={app}/>
    </div>
  );
}

export default App;
