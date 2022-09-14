import axios from "axios";


const api = axios.create(
    {baseURL: "https://cdn.apicep.com/file/apicep/"}
);

export default api;