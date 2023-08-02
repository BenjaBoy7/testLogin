import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RoleTable.scss';

const RoleTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get('https://dev-wze16acqzm1wxx0.api.raw-labs.com/user-roles'); // Replace with your API endpoint
      setData(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (field === sortedField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortOrder('asc');
    }
  };

  const sortedData = sortedField
    ? data.sort((a, b) => {
        const fieldA = a[sortedField].toLowerCase();
        const fieldB = b[sortedField].toLowerCase();
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
      })
    : data;

  const filteredData = searchTerm
    ? sortedData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sortedData;

  return (
    <div className="role-table">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="role-table-container">
        <table className="role-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Name {sortedField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('role')}>
                Role {sortedField === 'role' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default RoleTable;
