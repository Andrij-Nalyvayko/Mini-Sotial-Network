import axios from 'axios';

export const downloadingUsers = (url: string) => {
  return axios.get(url)
};
