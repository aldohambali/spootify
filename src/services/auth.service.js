import axios from "axios";
import config from "../config";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const authUrl = config.api.authUrl;

class AuthService {
    constructor() {
        this.state = {
            accessToken: null,
        };
    }

    setAccessToken = (accessToken) => {
        this.state = {
            accessToken,
        };
    };

getAccessToken = async () => {
    try {
        
        const response = await axios.post(`${authUrl}`,"grant_type=client_credentials",
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                    Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
                },
            }
        );
        this.setAccessToken(response.data.access_token);
    } 
    catch (error) {
        console.error('Error getAccessToken:', error);
    }
};
}

export default new AuthService();
