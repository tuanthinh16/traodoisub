import axios from "axios"
import { TOKEN, URL } from "../config/base"

export const SettingConfig = (id: string) => {
    const url = URL + "?fields=tiktok_run&id=" + id + "&access_token=" + TOKEN;
    console.log(url)
    const rs = axios.get(url);
    console.log(rs);
    return rs;
}
export const GetJob = (type: string) => {
    const url = URL + "?fields=" + type + "&access_token=" + TOKEN;
    const rs = axios.get(url);
    return rs;
}
export const GetInfo = async () => {
    //https://traodoisub.com/api/?fields=profile&access_token={{TDS_token}}
    const url = URL + "?fields=profile&access_token=" + TOKEN;
    console.log(url)
    try {
        const response = await axios.get(url, {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching profile info:", error);
        throw error; // Throw error to handle it in the component
    }
}