"use client"

import axios from "axios";

const ApiUrl = "http://localhost:5000/api";
// const ApiUrl = "https://clicknbuy.vercel.app/api" ;

const ApiService = async (method, endpoint, data = {}, token = "") => {

    try {

        const headers = token ? { Authorization: `Bearer ${token}` } : {};


        const response = await axios({
            method,
            url: `${ApiUrl}/${endpoint}`,
            data,
            headers,
        });

        return response.data;
    } catch (error) {
        const errorResponse = error.response
            ? error.response.data
            : { message: "An error occurred", error };

        throw errorResponse;
    }

}

export default ApiService;
