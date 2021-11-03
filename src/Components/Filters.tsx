import React, { useState, Dispatch, SetStateAction } from 'react';
import { ChoosingOfCountries } from './ChoosingOfCountries';
import { SelectingGender } from './SelectingGender';
import { Users } from '../Types/Users';

type Props = {
  users: Users[],
  setFilteredUsers: Dispatch<SetStateAction<Users[]>>;
}

export const Filters: React.FC<Props> = ({users, setFilteredUsers}) => {
  const [nationals, setNationals] = useState<string[]>([]);
  const [gender, setGender] = useState<string>('all');
  
  const applyFilters = () => {
    setFilteredUsers(() => {
      if (nationals.length === 0 && gender === 'all') {

        return users
      }

      return [...users].filter((elem: Users) => {
        return ((elem.gender === gender || gender === 'all') && (nationals.includes(elem.nationality) || nationals.length === 0));
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