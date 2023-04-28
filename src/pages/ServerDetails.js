import { React, useState, useEffect } from 'react';
import SmallHeader from '../components/SmallHeader';
import { useParams } from 'react-router-dom';
import { Line, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, ComposedChart } from 'recharts';
import moment from 'moment';
import './ServerDetails.css';

const ServerDetails = () => {
    const { serverId } = useParams();
    const [serverDetails, setServerDetails] = useState(null);
    const [serverMessages, setServerMessages] = useState(null);
    const [serverStats, setServerStats] = useState(null);
    const [topChatters, setTopChatters] = useState(null);


    const fetchServerDetails = async (serverId) => {
        try {
            const response = await fetch(`https://tribewatch.azurewebsites.net/api/server/${serverId}`);
            const data = await response.json();
            setServerDetails(data);
        } catch (error) {
            console.error('Error fetching server details:', error);
        }
    };

    const fetchServerMessages = async (serverId) => {
        try {
            const response = await fetch(`https://tribewatch.azurewebsites.net/api/messages/${serverId}`);
            const data = await response.json();
            setServerMessages(data);
        } catch (error) {
            console.error('Error fetching server messages:', error);
        }
    };

    const fetchRecentMessages = async (serverId) => {
        try {
            const response = await fetch(`https://tribewatch.azurewebsites.net/api/recent-messages/${serverId}`);
            const data = await response.json();
            // Process data as needed or store it in the state
        } catch (error) {
            console.error('Error fetching recent messages:', error);
        }
    };

    const fetchTopChatters = async (serverId) => {
        try {
            const response = await fetch(`https://tribewatch.azurewebsites.net/api/top-chatters/${serverId}`);
            const data = await response.json();
            setTopChatters(data);
        } catch (error) {
            console.error('Error fetching daily data:', error);
        }
    };

    const fetchDaily = async (serverId) => {
        try {
            const response = await fetch(`https://tribewatch.azurewebsites.net/api/daily/${serverId}`);
            const data = await response.json();
            setServerStats(data);
        } catch (error) {
            console.error('Error fetching daily data:', error);
        }
    };

    const customTickFormatter = (tick) => {
        return moment(tick).format('MMM D, HH:mm');
    };

    const calculateDaysOld = (createdAt) => {
        const currentDate = new Date();
        const serverCreatedAt = new Date(createdAt);
        const timeDifference = currentDate - serverCreatedAt;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    };

    useEffect(() => {
        fetchServerDetails(serverId);
        fetchServerMessages(serverId);
        fetchDaily(serverId);
        fetchTopChatters(serverId)
    }, [serverId]);

    return (
        <div>
            <SmallHeader centerContent={<h2></h2>} buttonText="dashboard" buttonHref="/dashboard" />
            <div>
                {serverDetails && serverStats && topChatters ? (
                    <div className='details-container'>
                        <div className='guild-title'>
                            <img src={`https://cdn.discordapp.com/icons/${serverDetails.guild_id}/${serverDetails.icon}.png`} alt="Server icon" className='details-logo' />
                            <h1 className="guild">{serverDetails.guild_name}</h1>
                        </div>
                        <div className="parent-container">
                            <div className="data-container"> <div className="content">
                                <div className="text-container">
                                    <h2 className="big-text">{serverStats.unique_users}</h2>
                                </div>
                            </div>
                                <p className="small-text">daily users</p>
                            </div>
                            <div className="data-container">
                                <div className="content">
                                    <div className="text-container">
                                        <h2 className="big-text">{serverStats.message_count}</h2>
                                    </div>
                                </div>
                                <p className="small-text">daily messages</p>
                            </div>
                            <div className="data-container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <div className="content">
                                    <div className="text-container" style={{ display: "flex", justifyContent: "space-between" }}>
                                        {topChatters ? (
                                            topChatters.map((chatter, index) => (
                                                <div key={index} style={{ textAlign: "center", marginRight: index < topChatters.length - 1 ? "10px" : 0 }}>
                                                    <img
                                                        src={`https://cdn.discordapp.com/avatars/${chatter.author_id}/${chatter.avatar}`}
                                                        alt="User avatar"
                                                        style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                                                    />
                                                    <h2 className="big-text" style={{ fontSize: "10px", marginTop: "5px" }}>{chatter.message_count}</h2>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Loading top chatters...</p>
                                        )}
                                    </div>
                                </div>
                                <p className="small-text" style={{ marginTop: "auto" }}>top chatters</p>
                            </div>
                            <div className="data-container">
                                <div className="content">
                                    <div className="text-container">
                                        <h2 className="big-text">{calculateDaysOld(serverDetails.created_at)}</h2>
                                    </div>
                                </div>
                                <p className="small-text">days old</p>
                            </div>
                        </div>
                        <div className='details-table'>
                            {serverMessages ? (
                                <ResponsiveContainer width="100%" height={300}>
                                    <ComposedChart data={serverMessages}>
                                        <XAxis dataKey="hour" tick={{ fontSize: 12 }} tickFormatter={customTickFormatter} />
                                        <YAxis yAxisId="left" tick={{ fontSize: 12 }} orientation="left" />
                                        <YAxis yAxisId="right" tick={{ fontSize: 12 }} orientation="right" domain={[0, 3000]} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#27282b', fontSize: "12px" }}
                                            itemStyle={{ color: '#fff' }}
                                            labelStyle={{ display: 'none' }}
                                        />
                                        <Legend wrapperStyle={{ fontSize: "14px" }} />
                                        <Bar yAxisId="right" dataKey="message_count" name="Messages" fill="#f5b031" />
                                        <Line
                                            yAxisId="left"
                                            type="monotone"
                                            dataKey="unique_users"
                                            name="Active Users"
                                            stroke="#8884d8"
                                            strokeWidth={2}
                                            dot={false}
                                            animationDuration={500}
                                        />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            ) : (
                                <p>Loading chart data...</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Loading server details...</p>
                )}
            </div>
        </div>
    );
};

export default ServerDetails;
