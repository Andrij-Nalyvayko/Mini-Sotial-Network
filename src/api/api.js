import axios from 'axios';

export const downloadingUsers = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  return axios.get(BASE_URL);
};
