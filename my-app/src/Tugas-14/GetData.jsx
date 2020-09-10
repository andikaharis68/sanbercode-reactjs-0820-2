import axios from "axios";

const GetData = axios.create({
    baseURL: `http://backendexample.sanbercloud.com/api/`,
    responseType: "json",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
export default GetData;