import axios from "axios";
import AuthService from "./auth.service";
import config from "../config";

const baseUrl = config.api.baseUrl;

class FeaturedPlaylist {

getFeaturedPlaylist = async () => {
    await AuthService.getAccessToken();
    const accessToken = AuthService.state.accessToken; 
    console.log("token :", accessToken);
    try {
    const response = await axios.get(`${baseUrl}/browse/featured-playlists`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.data;
    } 
    catch (error) {
        console.error('Error getFeaturedPlaylist:', error);
    }
};
}

export default new FeaturedPlaylist();
