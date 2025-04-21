import React, { useEffect, useState } from 'react';
import { fetchPlugins } from '../services/api';

const PluginsPage = () => {
    const [plugins, setPlugins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPlugins = async () => {
            try {
                const data = await fetchPlugins();
                setPlugins(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPlugins();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Plugins</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Version</th>
                        <th>Product ID</th>
                        <th>Date</th>
                        <th>Basename</th>
                    </tr>
                </thead>
                <tbody>
                    {plugins.map(plugin => (
                        <tr key={plugin.product_id}>
                            <td>{plugin.name}</td>
                            <td>{plugin.type}</td>
                            <td>{plugin.version}</td>
                            <td>{plugin.product_id}</td>
                            <td>{plugin.date}</td>
                            <td>{plugin.basename}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PluginsPage;