import React, { Dispatch, SetStateAction } from 'react';
import { ChoosingOfCountries } from './ChoosingOfCountries';
import { SelectingGender } from './SelectingGender';
import { useForm } from 'react-hook-form';
import { User } from '../../Types/Users';

type Props = {
  users: User[],
  setFilteredUsers: Dispatch<SetStateAction<User[]>>;
};

type Option = {
  gender: string,
  countries: string[],
}

export const Filters: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm<Option>();

  return (
    <form
      action="/Mini-Sotial-Network"
      className="my-network__filter"
    >

      <ChoosingOfCountries
        register={register}
        handleSubmit={handleSubmit}
      />

      <SelectingGender
        register={register}
      />

      <button type="submit">
        Apply filters
      </button>
    </form>
  );
};
