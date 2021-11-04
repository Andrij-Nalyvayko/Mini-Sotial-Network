import React, { Dispatch, SetStateAction } from 'react';
// import { Link, NavLink } from 'react-router-dom';

type Props = {
  setNationals: Dispatch<SetStateAction<string[]>>,
  nationals: string[],
};

export const ChoosingOfCountries: React.FC<Props> = ({ setNationals, nationals }) => {
  // const countriesList = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI'
  // 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];

  const addNationality = (value: string) => {
    if (nationals.includes(value)) {
      setNationals(nationals.filter((country: string) => country !== value));

      return;
    }

    setNationals((countries: string[]) => [...countries, value]);
  };

  return (
    // <div>
    //     {countriesList.map(elem => {
    //       return (
    //         <NavLink
    //           to={`/country/${elem}`}
    //           key={+new Date()}
    //           type="button"
    //           // onClick={() => setText(elem.title)}
    //           className="country"
    //           activeClassName="country__active"
    //         >
    //           {elem}
    //         </NavLink>
    //       );
    //     })}
    //   </div>
    <div className="countries">
      <label htmlFor="AU" className="country">
        AU
        <input
          id="AU"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="AU"
        />
      </label>

      <label htmlFor="BR" className="country">
        BR
        <input
          id="BR"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="BR"
        />
      </label>

      <label className="country" htmlFor="CA">
        CA
        <input
          id="CA"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="CA"
        />
      </label>

      <label className="country" htmlFor="CH">
        CH
        <input
          id="CH"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="CH"
        />
      </label>

      <label className="country" htmlFor="DE">
        DE
        <input
          id="DE"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="DE"
        />
      </label>

      <label className="country" htmlFor="DK">
        DK
        <input
          id="DK"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="DK"
        />
      </label>

      <label className="country" htmlFor="ES">
        ES
        <input
          id="ES"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="ES"
        />
      </label>

      <label className="country" htmlFor="FI">
        FI
        <input
          id="FI"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="FI"
        />
      </label>

      <label className="country" htmlFor="FR">
        FR
        <input
          id="FR"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="FR"
        />
      </label>

      <label className="country" htmlFor="GB">
        GB
        <input
          id="GB"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="GB"
        />
      </label>

      <label className="country" htmlFor="IE">
        IE
        <input
          id="IE"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="IE"
        />
      </label>

      <label className="country" htmlFor="IR">
        IR
        <input
          id="IR"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NO"
        />
      </label>

      <label className="country" htmlFor="NL">
        NL
        <input
          id="NL"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NL"
        />
      </label>

      <label className="country" htmlFor="NZ">
        NZ
        <input
          id="NZ"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NZ"
        />
      </label>

      <label className="country" htmlFor="TR">
        TR
        <input
          id="TR"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="TR"
        />
      </label>

      <label className="country" htmlFor="US">
        US
        <input
          id="US"
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="US"
        />
      </label>
    </div>
  );
};
