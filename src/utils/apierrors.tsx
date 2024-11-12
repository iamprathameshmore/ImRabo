
// // Helper function for API request with error handling
// const makeApiRequest = async (requestFunction: () => Promise<amy>) => {
//     try {
//       const response = await requestFunction();
//       return response.data; // Return data from response
//     } catch (error) {
//       handleApiError(error); // Call the error handling function
//       throw error; // Rethrow the error for further handling if needed
//     }
//   };
  
//   // Function to handle API errors
//   const handleApiError = (error: unknown) => {
//     // Log the error or handle it according to your application's needs
//     console.error('API request failed:', error);
//     // You can implement additional logic here, such as showing a notification to the user
//   };
  
// export default makeApiRequest;