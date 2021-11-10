import axios from 'axios';

export const downloadingUsers = (url: any) => axios.get(url);
