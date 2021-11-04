import { AxiosResponse } from 'axios';
import { SetStateAction } from 'react';
import { User } from '../Types/Users';

export const GetUsers = async (
  downloadingUsers: { (): Promise<AxiosResponse<any, any>>; (): Promise<any>; },
  setUsers: { (value: SetStateAction<User[]>): void; (arg0: any): void; },
) => {
  await downloadingUsers().then(param => {
    setUsers(param.data.results);
  });
};
