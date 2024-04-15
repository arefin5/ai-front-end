import axios, { AxiosResponse, AxiosError } from 'axios'; // Import AxiosError
import { useState } from 'react';

interface ApiRequestProps {
  url: string;
  requestData: any; // Change the type as per your request data structure
}

interface ApiResponse {
  success: boolean;
  message: string;
  // Add other fields as per your API response
}

const useApiRequest = () => {
  const [responseData, setResponseData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = async ({ url, requestData }: ApiRequestProps) => {
    setLoading(true);
    try {
      const response = await axios.post<ApiResponse>(url, requestData);
      setResponseData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Handle AxiosError specifically
        setError(err.message);
      } else {
        // Handle other types of errors
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { responseData, error, loading, makeRequest };
};

export default useApiRequest;
