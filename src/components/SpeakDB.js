// MyComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './SpeakDB.css';

const SpeakDB = ({ serverId }) => {
    const [dataInput, setDataInput] = useState('');
    const [analyticsInput, setAnalyticsInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const result = await axios.post('http://127.0.0.1:5000/api/query-server/', {
                data: dataInput,
                analytics: analyticsInput,
                server: serverId
            });
            setResponse(result.data);
        } catch (error) {
            console.error(error);
            setResponse('Error fetching data');
        }
    };

    return (
        <div className="detailsContainer">
            <div className="input-container">
                <input
                    type="text"
                    className="input-box"
                    placeholder="Data you want..."
                    value={dataInput}
                    onChange={(e) => setDataInput(e.target.value)}
                />
                <input
                    type="text"
                    className="input-box"
                    placeholder="Analytics you want..."
                    value={analyticsInput}
                    onChange={(e) => setAnalyticsInput(e.target.value)}
                />
                <div className="button-container">
                    <button className="submit-button" onClick={handleSubmit}>
                        Run
                    </button>
                </div>
            </div>
            {response.result && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="output-container">
                        <ReactMarkdown>{response.result}</ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
};
    
export default SpeakDB;
