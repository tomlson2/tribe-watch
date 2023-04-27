import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import ServerRow from './ServerRow';

const ServerTable = ({ timeFilter }) => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'messages', direction: 'desc' });

  const fetchData = () => {
    let req = '';

    if (timeFilter) {
      let startDate = new Date();
      let hoursToSubtract = parseInt(timeFilter);

      startDate.setHours(startDate.getHours() - hoursToSubtract);

      req = `?start_date=${startDate.toISOString()}`;
    }
    return req;
  };

  const sortData = (data, sortConfig) => {
    const sortedData = [...data];

    if (sortConfig.direction === 'asc') {
      sortedData.sort((a, b) => a[sortConfig.key] - b[sortConfig.key]);
    } else {
      sortedData.sort((a, b) => b[sortConfig.key] - a[sortConfig.key]);
    }

    return sortedData;
  };

  const updateData = () => {
    const req = fetchData();
    $.getJSON(`https://tribewatch.azurewebsites.net/api/data${req}`, function (responseData) {
      setData(responseData);
    });
  };

  const onHeaderClick = (columnKey) => {
    if (sortConfig.key === columnKey) {
      setSortConfig({ ...sortConfig, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortConfig({ key: columnKey, direction: 'desc' });
    }
  };

  useEffect(() => {
    updateData();
  }, [timeFilter]); // Add timeFilter to the dependency array

  return (
    <table className="data">
      <thead>
        <tr>
          <th onClick={() => onHeaderClick('server')}>server</th>
          <th onClick={() => onHeaderClick('messages')}>messages</th>
          <th onClick={() => onHeaderClick('active_users')}>active users</th>
          <th onClick={() => onHeaderClick('trad_vol')}>trade vol</th>
          <th onClick={() => onHeaderClick('fp')}>floor price</th>
          <th onClick={() => onHeaderClick('age')}>age (days)</th>
        </tr>
      </thead>
      <tbody>
        {sortData(data, sortConfig).map((item, index) => (
          <ServerRow key={index} item={item} />
        ))}

      </tbody>
    </table>
  );
};

export default ServerTable;
