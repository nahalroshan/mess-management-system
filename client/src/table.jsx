import React, { useState, useEffect } from 'react';

export default function Table() {
  const initialData = [
    { id: 1, name: 'John Doe', room: 25, date: '22/09/2021' },
    { id: 2, name: 'Jane Smith', room: 30, date: '22/09/2021' },
    { id: 3, name: 'Bob Johnson', room: 22, date: '22/09/2021' },
    { id: 4, name: 'Alice Brown', room: 18, date: '23/09/2021' },
  ];

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // User has scrolled to the bottom
        setIsLoading(true);

        // Simulate fetching more data (you can replace this with your API call)
        setTimeout(() => {
          const newData = [
            ...data,
            { id: 5, name: 'Eve Johnson', room: 28, date: '24/09/2021' },
          ];
          setData(newData);
          setIsLoading(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div className='bg-white w-4/5 h-72 overflow-y-scroll ml-10'>
      <table border="1" style={{ tableLayout: 'fixed', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ width: '30%', textAlign: 'left', padding: '1rem' }}>ID</th>
            <th style={{ width: '60%', textAlign: 'left', padding: '1rem' }}>Name</th>
            <th style={{ width: '40%', textAlign: 'left', padding: '1rem' }}>Room</th>
            <th style={{ width: '50%', textAlign: 'left', padding: '1rem' }}>Date</th>
          </tr>
          <tr>
            <td colSpan="4" style={{ borderBottom: '2px solid black' }}></td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr>
                <td style={{ width: '30%', textAlign: 'left', padding: '1rem' }}>{item.id}</td>
                <td style={{ width: '60%', textAlign: 'left', padding: '1rem' }}>{item.name}</td>
                <td style={{ width: '40%', textAlign: 'left', padding: '1rem' }}>{item.room}</td>
                <td style={{ width: '50%', textAlign: 'left', padding: '1rem' }}>{item.date}</td>
              </tr>
              {index !== data.length - 1 && <tr><td colSpan="4"><hr /></td></tr>}
            </React.Fragment>
          ))}
          {isLoading && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
