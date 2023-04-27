import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './TotalMessageCount.css';
import MarketOverviewHeader from './MarketOverviewHeader';

const TotalMessageCount = () => {
  const [messageData, setMessageData] = useState(null);
  const [volumeData, setVolumeData] = useState(null);

  const fetchServerDetails = async () => {
    try {
      const [messageResponse, volumeResponse] = await Promise.all([
        fetch('https://tribewatch.azurewebsites.net/api/total_message_count'),
        fetch('https://tribewatch.azurewebsites.net/api/total_vol'),
      ]);
  
      const [messageData, volumeData] = await Promise.all([
        messageResponse.json(),
        volumeResponse.json(),
      ]);
  
      // Aggregate the volume data by hour
      const volumeByHour = volumeData.reduce((acc, cur) => {
        const date = new Date(cur.time);
        const formattedTime =
          date.toISOString().slice(0, 19).replace("T", " ");
        acc[formattedTime] = (acc[formattedTime] || 0) + cur.volume;
        return acc;
      }, {});
  
      // Merge messageData and volumeByHour
      const mergedData = messageData.map((item) => ({
        ...item,
        'Market Volume': volumeByHour[item.hour] || 0,
      }));
  
      setMessageData(mergedData);
    } catch (error) {
      console.error('Error fetching server details:', error);
    }
  };
  
  

  useEffect(() => {
    fetchServerDetails();
  }, []);

  return (
    <div className='chart-container'>
      <MarketOverviewHeader />
      {messageData? (
        <ResponsiveContainer width="100%" aspect={4/1}>
          <ComposedChart data={messageData}>
            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12 }} orientation="left" />
            <YAxis yAxisId="center" tick={{ fontSize: 12 }} orientation="right" />
            <YAxis yAxisId="right" domain={[0, 7000]} axisLine={false} tick={false}/>
            <Tooltip
              contentStyle={{ backgroundColor: '#27282b', fontSize: "12px" }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ display: 'none' }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Message Count"
              stroke="#f5b031"
              dot={false}
              strokeWidth={2}
              animationDuration={0}
            />
            <Line
              yAxisId="center"
              type="monotone"
              dataKey="Active Users"
              stroke="#2179b5"
              dot={false}
              strokeWidth={2}
              animationDuration={0}
            />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className="data-loading">Data Loading...</div>
      )}
    </div>
  );
};

export default TotalMessageCount;