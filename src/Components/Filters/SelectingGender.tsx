import React from 'react';

type Props = {
  register: any,
};

export const SelectingGender: React.FC<Props> = ({ register }) => {
  return (
    <select
      {...register("gender")}
      id="FilterByGender"
    >
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};
