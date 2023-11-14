import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3007/user', {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{`${user.name} (ID: ${user.id})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
