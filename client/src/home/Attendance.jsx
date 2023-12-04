// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import data from "./data";

function Attendance() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [username, setUsername] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsernameFromFirestore(user.email);
      }
    });
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
        console.log("No matching documents.");
      }
    } catch (error) {
      console.error("Error getting username:", error);
    }
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex].image;
  };

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="flex flex-row flex-grow ">
      <Navbar />
      <div className="flex flex-col justify-center ml-96">
        {/* Additional content to the right of the Navbar */}
        <div className="ml-4">
          {/* Add your additional content here */}

          <h1 className="mb-4 mt-16 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
              Welcome Back Jaseem
            </span>
          </h1>
          <p className="text-lg ml-36 font-normal text-gray-700 lg:text-xl dark:text-gray-700">
            Take a look at your attendance details.
          </p>
        </div>

        <div className="h-84 w-64 m-4 mt-12 flex-row">
          <a
            className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            href="#"
            onClick={toggleCardVisibility}
          >
            <div className="p-4 md:p-5 h-48 flex flex-col ">
              <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                ATTENDANCE PERCENTAGE
              </h3>
              <p className="m-8 text-gray-500 dark:text-gray-400 text-6xl">
                50%
              </p>
            </div>
          </a>
          <div>
            {isCardVisible && (
              <a
                className="flex flex-col mt-4 bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                href="#"
              >
                <div className="p-4 md:p-5  flex flex-col ">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                    Missed Dates
                  </h3>
                  <p className="m-2 text-gray-500 dark:text-gray-400 text-xl">
                    19/11/2023
                  </p>
                  <p className="m-2 text-gray-500 dark:text-gray-400 text-xl">
                    19/11/2023
                  </p>
                  <p className="m-2 text-gray-500 dark:text-gray-400 text-xl">
                    19/11/2023
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
