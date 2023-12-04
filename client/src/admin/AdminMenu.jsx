// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";

function Menu() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch menu data from the API
    fetch("https://mess-lysy.onrender.com/menu")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  const selectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex flex-row">
      <AdminNav />
      <div className="flex flex-col justify-start items-center flex-grow ml-40">
        <div className="flex flex-row justify-evenly m-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <button
              key={day}
              onClick={() => selectDay(index + 1)} // Use index + 1 as the date
              className={`bg-transparent m-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
                selectedDay === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-evenly ml-12 ">
          {selectedDay && (
            <>
              {menuData.map((menu) => (
                menu.date === selectedDay && (
                  
                  <div
                    key={menu.date}
                    className="max-w-sm bg-white border h-96 w-72 border-gray-200 rounded-lg shadow dark:bg-sky-100 dark:border-gray-700 m-4"
                  >
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl flex justify-center font-bold tracking-tight text-gray-900">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][selectedDay - 1]}
                      </h5>
                      <br />
                      <h5 className="mb-2 m-2 text-2xl font-bold tracking-tight text-gray-900">
                        Breakfast: {menu.breakfast}
                      </h5>
                      <div className="flex flex-row">
                      <input type="text" className="ml-2" placeholder="" />
                      <button className="ml-2" onClick={() => console.log("Jaseem")}>submit</button>

                      </div>
                     
                      <p className="mb-2 m-2 text-2xl font-bold tracking-tight text-gray-900">
                        Lunch: {menu.lunch}
                      </p>
                      <div className="flex flex-row">
                      <input type="text" className="ml-2" placeholder=" " />
                      <button className="ml-2" onClick={() => console.log("Jaseem")}>submit</button>

                      </div>
                     
                      <p className="mb-2 m-2 text-2xl font-bold tracking-tight text-gray-900">
                        Dinner: {menu.dinner}
                      </p>
                      <div className="flex flex-row">
                      <input type="text" className="ml-2" placeholder=" " />
                      <button className="ml-2" onClick={() => console.log("Jaseem")}>submit</button>

                      </div>
                     
                    </div>
                  </div>
                )
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
