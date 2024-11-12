// services/apiService.js
import axios from 'axios';

const apiService = {
  // General function for making API requests
  request: async (method: string, url: string, data = {}, headers = {}) => {
    try {
      const config = {
        method: method,
        url: url,
        headers: {
          "Content-Type": "application/json", // Default Content-Type
          ...headers, // Spread any additional headers
        },
        data: method === 'GET' ? undefined : data, // Data is only included for POST and PUT requests
      };

      const response = await axios(config);
      console.log(response.data)
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("API request failed:", error);
      throw error; // Rethrow the error for further handling if needed
    }
  },
};

export default apiService;
