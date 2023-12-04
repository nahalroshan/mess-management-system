import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react"; // Add useEffect import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, query, where, getDocs } from "firebase/firestore"; // Assuming these are your required imports
import { db } from "../firebase";

export default function Rate() {
  const [startDate, setStartDate] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [category, setCategory] = useState("Select a category");
  const [comment, setComment] = useState();
  const [emoji, setEmoji] = useState();
  const [effect, setEffect] = useState(false);
  const auth = getAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Check if the user is signed in before accessing properties
        if (user.email) {
          getUsernameFromFirestore(user.email);
        }

        getUserIDFromAPI(user.uid);
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
        // Assuming you have a setUsername function

      } else {
        console.log("No matching documents for username.");
      }
    } catch (error) {
      console.error("Error getting username:", error);
    }
  };

  const getUserIDFromAPI = async (user) => {
    try {
      // Replace this with your actual API endpoint
      const apiUrl = `https://mess-lysy.onrender.com/get_user_id_by_uid/${user}`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
        console.log(data);
      if (data || data.id) {
        setUserId(data.id);
        console.log();
      } else {
        console.log("User ID not found in API response.");
      }
    } catch (error) {
      console.error("Error getting user ID from API:", error);
    }
  };

  const handleDate = () => {
    setShowDate(true);
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const rateSubmit = (e) => {
    e.preventDefault();
  };

  const clear = (e) => {
    e.preventDefault();
    setComment("");
  };

  const changeRate = (e, r) => {
    e.preventDefault();
    setEmoji(r);
    setEffect(true);
  };

  const addComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 justify-center items-center">
      <form
        className="flex flex-col h-3/4 w-1/3  bg-white rounded-2xl"
        onSubmit={rateSubmit}
      >
        <div className="ml-10 space-y-4">
          <div className="font-medium text-lg mt-10">Give Feedback</div>
          <div className="flex flex-row gap-3 items-center text-black">
            <div className="hover:cursor-pointer">
              <box-icon
                name="calendar"
                size="md"
                onClick={handleDate}
              ></box-icon>{" "}
            </div>
            {showDate && (
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            )}
          </div>
          <div>
            <select value={category} onChange={handleChange}>
              <option value="Breakfast"> Breakfast </option>
              <option value="Lunch"> Lunch </option>
              <option value="Snacks"> Snacks </option>
              <option value="Dinner"> Dinner </option>
            </select>
          </div>
          <div className="flex flex-row space-x-3 mr-6">
            <div
              className={`${
                emoji === "Amazing" ? "animate-wiggle" : ""
              } border-2 border-gray rounded-md w-20 h-20 flex flex-col items-center justify-center hover:cursor-pointer ${
                emoji === "Amazing" ? "shadow-md shadow-pink-400" : ""
              }`}
              onClick={(e) => {
                changeRate(e, "Amazing");
              }}
            >
              <div>
                {" "}
                <box-icon name="happy" size="md"></box-icon>{" "}
              </div>
              <div className="text-center text-sm"> Amazing </div>
            </div>
            <div
              className={`${
                emoji === "Good" ? "animate-wiggle" : ""
              } border-2 border-gray rounded-md w-20 h-20 flex flex-col items-center justify-center hover:cursor-pointer ${
                emoji === "Good" ? "shadow-md shadow-pink-400" : ""
              }`}
              onClick={(e) => {
                changeRate(e, "Good");
              }}
            >
              <div>
                {" "}
                <box-icon name="smile" size="md"></box-icon>{" "}
              </div>
              <div className="text-center text-sm"> Good </div>
            </div>
            <div
              className={`${
                emoji === "Average" ? "animate-wiggle" : ""
              } border-2 border-gray rounded-md w-20 h-20 flex flex-col items-center justify-center hover:cursor-pointer ${
                emoji === "Average" ? "shadow-md shadow-pink-400" : ""
              }`}
              onClick={(e) => {
                changeRate(e, "Average");
              }}
            >
              <div>
                {" "}
                <box-icon name="meh" size="md"></box-icon>{" "}
              </div>
              <div className="text-center text-sm"> Average </div>
            </div>
            <div
              className={`${
                emoji === "Bad" ? "animate-wiggle" : ""
              } border-2 border-gray rounded-md w-20 h-20 flex flex-col items-center justify-center hover:cursor-pointer ${
                emoji === "Bad" ? "shadow-md shadow-pink-400" : ""
              }`}
              onClick={(e) => {
                changeRate(e, "Bad");
              }}
            >
              <div>
                {" "}
                <box-icon name="sad" size="md"></box-icon>{" "}
              </div>
              <div className="text-center text-sm"> Bad </div>
            </div>
            <div
              className={`${
                emoji === "Terrible" ? "animate-wiggle" : ""
              } border-2 border-gray rounded-md w-20 h-20 flex flex-col items-center justify-center hover:cursor-pointer ${
                emoji === "Terrible" ? "shadow-md shadow-pink-400" : ""
              }`}
              onClick={(e) => {
                changeRate(e, "Terrible");
              }}
            >
              <div>
                {" "}
                <box-icon name="dizzy" size="md"></box-icon>{" "}
              </div>
              <div className="text-center text-sm"> Terrible </div>
            </div>
          </div>
          <div className="text-md font-medium"> Suggestions or Comments </div>
          <textarea
            rows="4"
            cols="50"
            className="p-3 border-2 border-blue-100 rounded-xl w-11/12 h-24"
            value={comment}
            onChange={addComment}
          ></textarea>
        </div>
        <div className="flex flex-row justify-end space-x-2 mr-10 mt-5">
          <input
            type="submit"
            value="submit"
            onClick={submitFeedback}
            className="rounded-md bg-pink-600 text-white py-2 px-4 hover:cursor-pointer"
          ></input>
          <button
            className="rounded-md bg-white text-gray-800 py-2 px-4"
            onClick={clear}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
