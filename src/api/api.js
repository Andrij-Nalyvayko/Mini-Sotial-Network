import axios from 'axios';

export const downloadingUsers = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const getUsers = '/api/?inc=gender,name,picture,dob,id,nat&results=15';

  return axios.get(BASE_URL + getUsers);
};
