import React from 'react';
import countries from '../../Data/Countries'
import './style.scss';

type Props = {
  handleSubmit: any,
  register: any,
};

export const ChoosingOfCountries: React.FC<Props> = ({ register }) => {

  return (
    <>
      <label htmlFor="countries"></label>
      
      <select
        id="countries"
        multiple
        name="ChoosingOfCountries"
        {...register("countries")}
      >
        {countries.map(elem => {
          return (
            <option key={elem} value={elem}>{elem}</option>
          );
        })}
      </select>
    </>
  );
};
