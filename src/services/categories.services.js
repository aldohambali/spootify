import axios from "axios";
import AuthService from "./auth.service";
import config from "../config";

const baseUrl = config.api.baseUrl;

class Categories {

getCategories = async () => {
    await AuthService.getAccessToken();
    const accessToken = AuthService.state.accessToken; 
    console.log("token :", accessToken);
    try {
        const response = await axios.get(`${baseUrl}/browse/categories`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        return response.data;
    } 
    catch (error) {
        console.error('error getCategories :', error);
    }
};
}

export default new Categories();
