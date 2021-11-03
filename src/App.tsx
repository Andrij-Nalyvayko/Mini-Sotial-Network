import React, { useEffect, useState } from 'react';
import { Filters } from './Components/Filters';
import { UserCards } from './UserCards';
import { getUsers } from './Components/getData'
import { downloadingUsers } from './api/api';
import { Users } from './Types/Users';

import './styles/style.scss';



export const App: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  let [filteredUsers, setFilteredUsers] = useState<Users[]>(users);

  useEffect(() => {
    getUsers(downloadingUsers, setUsers);
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