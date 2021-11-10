import { AxiosResponse } from 'axios';
import { User } from '../Types/Users';
import BASE_URL from '../Api/BASE_URL'

export const getUsers = async (
  downloadingUsers: any,//{ (): Promise<AxiosResponse<any, any>>; (): Promise<any>; },
  setUsers: (value: User[]) => void,
  query: any,
) => {
  const countries = ('&nat=' + query.getAll("countries").map((elem: any) => elem).join(','));
  const gender = '&gender=' + query.get("gender");

  const url = `${BASE_URL}/api/?inc=gender,name,picture,dob,nat,id&results=15${gender}${countries}`;

  await downloadingUsers(url).then((param: any) => {
    setUsers(param.data.results);
  });
};
