import { AxiosResponse } from 'axios';
import { User } from '../Types/Users';
import BASE_URL from '../Api/BASE_URL'

interface Data {
  data: {results: User[]}
};

export const GetUsers = async (
  downloadingUsers: (url: string) => Promise<any>,
  setUsers: (value: User[]) => void,
  query: any,
) => {
  const countries = ('&nat=' + query.getAll("countries").join(','));
  const gender = '&gender=' + query.get("gender");

  const url = `${BASE_URL}/api/?inc=gender,name,picture,dob,nat,id&results=15${gender}${countries}`;

  await downloadingUsers(url).then((param: Data) => {
    console.log(query);
    
    setUsers(param.data.results);
  });
};
