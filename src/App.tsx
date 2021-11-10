import React, { useEffect, useState } from 'react';
import { Filters } from './Components/Filters/Filters';
import { useLocation } from 'react-router-dom';
import { UserCards } from './Components/UserCards';
import { GetUsers } from './Components/GetData';
import { downloadingUsers } from './Api/api';
import { User } from './Types/Users';

import './Styles/Style.scss';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    GetUsers(downloadingUsers, setUsers, query);
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div className="my-network">
      <Filters users={users} setFilteredUsers={setFilteredUsers} />
      <UserCards users={filteredUsers} />
    </div>
  );
};
