import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import ServerRow from './ServerRow';

const ServerTable = ({ timeFilter }) => {
  const [data, setData] = useState([]);

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

  const updateData = () => {
    const req = fetchData();
    $.getJSON(`/data${req}`, function (responseData) {
      setData(responseData);
    });
  };

  useEffect(() => {
    updateData();
  }, [timeFilter]); // Add timeFilter to the dependency array

  return (
    <table>
      <thead>
        <tr>
          <th>server</th>
          <th>messages</th>
          <th>active users</th>
          <th>reactions</th>
          <th>age (days)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <ServerRow key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default ServerTable;
