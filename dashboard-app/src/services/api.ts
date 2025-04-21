import axios from 'axios';

const API_URL = 'https://srmehranclub.com/wp-json/sr-updater-api/v1/autodeshboard';

export const fetchPlugins = async (consumerKey: string, secretKey: string) => {
    try {
        const response = await axios.post(API_URL, {
            consumerKey: consumerKey,
            secret_key: secretKey,
            action: 'products'
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching plugins:', error);
        throw error;
    }
};