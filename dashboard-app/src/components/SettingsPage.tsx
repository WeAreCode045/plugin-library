import React, { useState } from 'react';

const SettingsPage = () => {
    const [consumerKey, setConsumerKey] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const handleSave = () => {
        // Logic to save the keys (e.g., API call to save the keys)
        console.log('Consumer Key:', consumerKey);
        console.log('Secret Key:', secretKey);
    };

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <label>
                    Consumer Key:
                    <input
                        type="text"
                        value={consumerKey}
                        onChange={(e) => setConsumerKey(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Secret Key:
                    <input
                        type="text"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default SettingsPage;