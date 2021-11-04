import React, { useState, Dispatch, SetStateAction } from 'react';
import { ChoosingOfCountries } from './ChoosingOfCountries';
import { SelectingGender } from './SelectingGender';
import { User } from '../../Types/Users';

type Props = {
  users: User[],
  setFilteredUsers: Dispatch<SetStateAction<User[]>>;
}

export const Filters: React.FC<Props> = ({users, setFilteredUsers}) => {
  const [nationals, setNationals] = useState<string[]>([]);
  const [gend, setGender] = useState<string>('all');
  
  const applyFilters = () => {
    setFilteredUsers(() => {
      if (nationals.length === 0 && gend === 'all') {

        return users
      }

      return [...users].filter((elem: User) => {
        return ((elem.gender === gend || gend === 'all') && (nationals.includes(elem.nat) || nationals.length === 0));
      })
    });
  }

  return (
    <form
      onSubmit={(anEvent) => {
        anEvent.preventDefault();
      }}

      className="my-network__filter"
      >

      <ChoosingOfCountries setNationals={setNationals} nationals={nationals} />
      <SelectingGender setGender={setGender} />

      <button
        type="button"
        onClick={applyFilters}
      >
        Apply filters
      </button>
    </form>
  )
}