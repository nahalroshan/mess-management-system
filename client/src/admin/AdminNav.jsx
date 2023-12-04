import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";

export default function AdminNav() {
  const [selected, setSelected] = useState();
  const location = useLocation();

  const handleButtonClick = (button) => {
    if (button === "logout") {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("User signed out successfully");
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    } else {
      setSelected(button);
    }
  };

  const getButtonStyle = (button) => {
    const isSelected =
      selected === button || location.pathname === `/${button}`;

    return {
      backgroundImage: isSelected
        ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(232,9,212,1) 0%, rgba(148,0,215,1) 100%)"
        : "",
      color: isSelected ? "white" : "",
      width: isSelected ? "180px" : "",
      padding: isSelected ? "6px 20px" : "6px 20px",
      borderRadius: isSelected ? " 0 32px 32px 0" : "",
    };
  };

  return (
    <div>
      <div className="fixed top-0 left-0 h-screen space-y-4 w-56 m-0 flex text-lg flex-col bg-white text-dark-gray">
        <Link to="/admindashboard">
          <button
            className={
              "flex flex-row gap-2 font-semibold  text-dark-gray mt-20"
            }
            style={getButtonStyle("home")}
            onClick={() => handleButtonClick("home")}
          >
            <box-icon
              name="home-alt-2"
              color={getButtonStyle("home").color || "currentColor"}
              size="20px"
            ></box-icon>{" "}
            Dashboard
          </button>
        </Link>
        <Link to='/adminattendance'>
        <button
          className={"flex flex-row gap-2 font-semibold  text-dark-gray"}
          style={getButtonStyle("attendance")}
          onClick={() => handleButtonClick("attendance")}
        >
          <box-icon
            name="calendar-check"
            color={getButtonStyle("attendance").color || "currentColor"}
            size="20px"
          ></box-icon>{" "}
          Attendance
        </button>
        </Link>
      
        <button
          className={"flex flex-row gap-2 font-semibold  text-dark-gray"}
          style={getButtonStyle("messcut")}
          onClick={() => handleButtonClick("messcut")}
        >
          <box-icon
            name="task-x"
            color={getButtonStyle("messcut").color || "currentColor"}
            size="20px"
          ></box-icon>{" "}
          Mess Cut
        </button>
        <Link to='/adminmenu'>
          <button
            className={"flex flex-row gap-2 font-semibold  text-dark-gray"}
            style={getButtonStyle("menu")}
            onClick={() => handleButtonClick("menu")}
          >
            <box-icon
              name="food-menu"
              color={getButtonStyle("menu").color || "currentColor"}
              size="20px"
            ></box-icon>{" "}
            Menu
          </button>
        </Link>

        {/* <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("payment")}
        onClick={() => handleButtonClick("payment")}> 
          Payment 
      </button> */}
        <Link to="/adminfeedback">
          <button
            className={"flex flex-row gap-2 font-semibold  text-dark-gray"}
            style={getButtonStyle("rate")}
            onClick={() => handleButtonClick("rate")}
          >
            <box-icon
              name="star"
              color={getButtonStyle("rate").color || "currentColor"}
              size="20px"
            ></box-icon>{" "}
            Feedback
          </button>
        </Link>
        <Link to='/adminlogout'>
        <button
          className={"flex flex-row gap-2 font-semibold p-2 text-dark-gray"}
          style={getButtonStyle("logout")}
          onClick={() => handleButtonClick("logout")}
        >
          <box-icon
            name="log-out"
            color={getButtonStyle("logout").color || "currentColor"}
            size="sm"
          ></box-icon>{" "}
          Logout
        </button>
        </Link>
      
      </div>
    </div>
  );
}
