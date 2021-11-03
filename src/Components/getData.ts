import { AxiosResponse } from 'axios';
import { Users } from '../Types/Users';

const createUser = (userData: any, setUsers: (arg0: (prewData: Users[]) => any[]) => void) => {
  const generalWay = userData.results[0];

  const result = {
    userID: userData.info.seed,
    photoUrl: generalWay.picture.large,
    fullName: `${generalWay.name.first} ${generalWay.name.last}`,
    gender: generalWay.gender,
    birthdayData: generalWay.dob.date.split('T')[0],
    nationality: generalWay.nat,
  };
  
  setUsers((prewData: Users[]) => [...prewData, result]);
}

export const getUsers = async (
  downloadingUsers: { (): Promise<AxiosResponse<any, any>>; (): Promise<any>; },
  setUsers: { (value: any): void; (arg0: (prewData: Users[]) => any): void; }
  ) => {

  for (let i = 0; i < 15; i++) {
    await downloadingUsers().then(param => {
      createUser(param.data, setUsers);
    })
  }
}