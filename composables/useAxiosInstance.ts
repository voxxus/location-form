import axios, {type AxiosInstance } from 'axios';
export const useAxiosInstance = () : AxiosInstance => {
  const apiKey = 'fff7eef0f1705df937a773ef18c51ad4d27a0caf';
  const secret = '21c8a45ac8a46b36bf672d49c778a380be8a1204';

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${apiKey}`,
      'X-Secret': secret,
    },
  });
};
