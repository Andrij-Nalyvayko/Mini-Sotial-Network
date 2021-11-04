import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setGender: Dispatch<SetStateAction<string>>,
};

export const SelectingGender: React.FC<Props> = ({ setGender }) => {
  return (
    <select
      onChange={(anEvent) => setGender(anEvent.target.value)}
      id="FilterByGender"
    >
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};
