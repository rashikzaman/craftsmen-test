import axios from "axios";
import apiError from 'utils/apiError'

const useApi = (function () {
    const baseUrl = process.env.MAGENTO_API_URL;
    /**
     * 
     * @param {string} url 
     * @param {string} method 
     * @param {*} payload 
     */
    const callApi = (url, method, payload) => {
        const result = axios({
            method: method || "get",
            url: url,
            data: {
                ...payload,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then((response) => {
            return response.data
        }).catch((e) => {
            if (e.response) {
                throw new apiError(e.response.status, e.response.data.message)
            }
            else
                throw new apiError(400, "Network error!");
        })

        return result
    }


    return {
        callApi: callApi
    }
});

export default useApi;
