import axios from 'axios';

export const downloadingUsers = () => {
  const BASE_URL = 'https://randomuser.me/api/?inc=gender,name,picture,dob,id,nat';

  return axios.get(BASE_URL);
};
