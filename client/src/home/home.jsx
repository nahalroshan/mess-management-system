import Navbar from "./navbar"
import Card from "./card"
import Search from "./search"
import Table from './table'
import Stats from "./stats"
import data from "./data"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useState, useEffect } from "react"

export default function Home() {
  const auth = getAuth();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Check if the user is signed in before accessing properties
        if (user.email) {
          getUsernameFromFirestore(user.email);
        }
        makeExternalAPICall(user.uid, user.email);
      }
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, [auth]);

  const getUsernameFromFirestore = async (email) => {
    try {
      const usersCollection = collection(db, "usernames");
      const q = query(usersCollection, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setUsername(docData.name);
      } else {
        console.log("No matching documents for username.");
      }
    } catch (error) {
      console.error("Error getting username:", error);
    }
  };

  const makeExternalAPICall = async (uid, email) => {
    try {
      // Replace this with your actual API endpoint
      const apiUrl = `https://mess-lysy.onrender.com/user_add/${uid}/${email}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("External API response:", data);
    } catch (error) {
      console.error("Error making external API call:", error);
    }
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex].image;
  };

  return (
    <div className=" h-screen w-screen flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-28">
      <div className="w-full sm:w-40">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-6 sm:space-y-10 w-full">
        <div className="flex flex-row mt-6 justify-between">
          <p className="text-3xl font-medium ml-10">Dashboard</p>
          <div className="flex flex-row space-x-4 items-center">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white"><box-icon name='envelope' color='#CD6496'></box-icon></div>
            <div className="space-x-4 rounded-l-2xl bg-white w-72 h-16 flex flex-row items-center shadow-lg shadow-dark-gray">
              <div className="ml-4"><img className = 'w-12 h-12' src={getRandomImage()} alt="User" /></div>
              <div className="flex flex-col">
                <div> {username} </div>
                <div className="text-xs text-dark-gray"> {username} </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <Card 
                title='Mess Out'
                icon='task-x'
                count='54' />
              <Card 
                title='Departures'
                icon='briefcase-alt'
                count='54' />
              <Card 
                title='Vacancies'
                icon='bed'
                count='54' />
            </div>
            <Search />
            <Table />
          </div>
          <div><Stats /></div>
        </div>
      </div>
    </div>
  );
}
