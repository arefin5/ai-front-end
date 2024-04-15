import axios from 'axios';
import { useState } from 'react';

interface ApiRequestProps {
  url: string;
  requestData: {
    email: string;
    password: string;
    
  };
}

interface ApiResponse {
  user: any;
  token: string;
  // Add other fields as per your API response
}

const useLoginReq = () => {
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
        setError(err.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { responseData, error, loading, makeRequest };
};

export default useLoginReq;
