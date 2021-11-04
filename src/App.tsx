import React, { useEffect, useState } from 'react';
import { Filters } from './Components/Filters/Filters';
import { UserCards } from './Components/UserCards';
import { GetUsers } from './Components/GetData';
import { downloadingUsers } from './Api/api';
import { User } from './Types/Users';

import './Styles/Style.scss';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  let [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  useEffect(() => {
    GetUsers(downloadingUsers, setUsers);
  }, [])

  useEffect(() => {
    setFilteredUsers(users);
  }, [users])

  return (
    <div className="my-network">
      <Filters users={users} setFilteredUsers={setFilteredUsers}/>
      <UserCards users={filteredUsers}/>
    </ div>
  )
}