import React, { useState } from 'react';
import Graph from './graph';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Stats() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex flex-col w-96 h-full bg-white mr-10 space-y-6">
      <div className="mt-4 font-medium text-xl ml-4"> Weekly Activities </div>
      <div className="flex flex-row justify-between items-center mr-16 ml-4">
        <div className="flex flex-col space-y-2">
          <div className="text-white rounded-full flex items-center justify-center text-2xl bg-onion w-14 h-14">
            52
          </div>
          <div className="text-dark-gray text-sm">Students</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-white rounded-full flex items-center justify-center text-2xl bg-onion w-14 h-14">
            52
          </div>
          <div className="text-dark-gray text-sm">Students</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center h-14">
            <div className="text-black text-2xl mr-2">Rs</div>
            <div className="text-black text-2xl">34000</div>
          </div>
          <div className="text-dark-gray text-sm">Revenue</div>
        </div>
      </div>
      <div style={{ marginTop: '90px' }} className='flex justify-center'>
        <Calendar
          onChange={setValue}
          value={value}
        />
      </div>
    </div>
  );
}
