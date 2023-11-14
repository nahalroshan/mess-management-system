// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [tableNames, setTableNames] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTableNames = async () => {
      try {
        // Fetch the list of table names from your API
        const response = await fetch('YOUR_TABLE_NAMES_API_URL');
        const data = await response.json();
        setTableNames(data);
      } catch (error) {
        console.error('Error fetching table names:', error);
      }
    };

    fetchTableNames();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data based on the selected table
      const response = await fetch(`YOUR_API_BASE_URL/${selectedTable}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedTable) {
      fetchData();
    }
  }, [selectedTable]);

  return (
    <div>
      <h1>User List</h1>
      <label>
        Select a table:
        <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
          <option value="">-- Select a table --</option>
          {tableNames.map((tableName) => (
            <option key={tableName} value={tableName}>
              {tableName}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
