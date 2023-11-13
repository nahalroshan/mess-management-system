import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState('dashboard');

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  const getButtonStyle = (button) => {
    const isSelected = selected === button;
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
    <div className="fixed top-0 left-0 h-screen space-y-4 w-56 m-0 flex text-lg flex-col bg-white text-dark-gray">
      <button
        className={'flex flex-row gap-2 font-semibold  text-dark-gray mt-20'}
        style={getButtonStyle("dashboard")}
        onClick={() => handleButtonClick("dashboard")}
      >
        <box-icon
          name="home-alt-2"
          color={getButtonStyle("dashboard").color || "currentColor"}
          size = '20px'
        ></box-icon>{" "} Dashboard
      </button>

      <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("attendance")}
        onClick={() => handleButtonClick("attendance")}> 
          <box-icon 
            name='calendar-check'
            color={getButtonStyle("attendance").color || "currentColor"}
            size = '20px'>
          </box-icon>{" "} Attendance 
      </button>
      <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("messcut")}
        onClick={() => handleButtonClick("messcut")}> 
          <box-icon 
            name='task-x'
            color={getButtonStyle("messcut").color || "currentColor"}
            size = '20px'>
          </box-icon>{" "} Mess Cut 
      </button>
      <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("menu")}
        onClick={() => handleButtonClick("menu")}> 
          <box-icon 
            name='food-menu'
            color={getButtonStyle("menu").color || "currentColor"}
            size = '20px'>
          </box-icon>{" "} Menu 
      </button>
      {/* <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("payment")}
        onClick={() => handleButtonClick("payment")}> 
          Payment 
      </button> */}
      <button 
        className={'flex flex-row gap-2 font-semibold  text-dark-gray'}
        style={getButtonStyle("feedback")}
        onClick={() => handleButtonClick("feedback")}> 
          <box-icon 
            name='star'
            color={getButtonStyle("feedback").color || "currentColor"}
            size = '20px'>
          </box-icon>{" "} Feedback 
        </button>

      <button
        className={'flex flex-row gap-2 font-semibold p-2 text-dark-gray'}
        style={getButtonStyle("logout")}
        onClick={() => handleButtonClick("logout")}
      >
        <box-icon
          name="log-out"
          color={getButtonStyle("logout").color || "currentColor"}
          size = 'sm'
        ></box-icon>{" "} Logout
      </button>
    </div>
  );
}
