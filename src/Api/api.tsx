import axios from 'axios';

export const downloadingUsers = (url: string) => {
  console.log(axios.get(url));
  
  return axios.get(url)
};
