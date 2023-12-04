import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Messcut() {
    const [applymessout, setApplyMessOut] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [messout, setMessOut] = useState(false);

    return (
        <div className="h-screen w-screen flex flex-col bg-gray-200">
            <p className="mt-10 ml-72 font-medium text-black text-3xl">Mess Cut</p>
            <div className="flex flex-col items-center justify-center w-11/12 h-3/4">
                {!applymessout && (
                    <div className="flex justify-center items-center mt-8">
                        <button
                            onClick={() => setApplyMessOut(true)}
                            className="relative inline-flex items-center justify-center p-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-violet-500 to-pink-500 hover:from-violet-500 hover:to-pink-500 hover:text-white focus:bg-gradient-to-br focus:from-violet-500 focus:to-pink-500 focus:text-white dark:text-white"
                        >
                            <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-focus:bg-opacity-0">
                                APPLY FOR MESS OUT
                            </span>
                        </button>
                    </div>
                )}
                {applymessout && !messout && (
                    <div className="flex flex-col space-y-6 w-1/3 items-center border-2 border-black rounded-lg py-10 px-6 shadow-md shadow-gray-800">
                        <div className="text-5xl"> Are you sure? </div>
                        {/* Include DatePicker or other content here */}
                        <div className="flex flex-row space-x-4 justify-center text-xl mt-4">
                            <button
                                className="bg-gradient-to-r from-blue-500 to-violet-500 h-12 w-24 text-white font-medium text-md rounded-xl transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                                onClick={() => setMessOut(true)}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-gradient-to-r from-violet-600 to-indigo-600 h-12 w-24 text-white font-medium text-md rounded-xl transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                                onClick={() => { setApplyMessOut(false); setSelectedDate() }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                )}
                {messout && applymessout && (
                    <div className="flex justify-center items-center mt-8">
                        <button
                            className="relative inline-flex items-center justify-center p-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-violet-500 to-pink-500 hover:from-violet-500 hover:to-pink-500 hover:text-white focus:bg-gradient-to-br focus:from-violet-500 focus:to-pink-500 focus:text-white dark:text-white"
                            onClick={() => { setApplyMessOut(false); setMessOut(false); setSelectedDate() }}
                        >
                            <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-focus:bg-opacity-0">
                                Cancel Mess Out
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
