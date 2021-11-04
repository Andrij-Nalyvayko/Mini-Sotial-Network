import React, { Dispatch, SetStateAction } from "react";
// import { Link, NavLink } from 'react-router-dom';

type Props = {
  setNationals: Dispatch<SetStateAction<string[]>>,
  nationals: string[],
}

export const ChoosingOfCountries: React.FC<Props> = ({ setNationals, nationals }) => {
  // const countriesList = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];
  
  const addNationality = (value: string) => {
    if (nationals.includes(value)) {
      setNationals(nationals.filter((country: string) => country !== value));

      return
    }

    setNationals((countries: string[]) => [...countries, value]);
  }

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
      <label
        className="country"
      >
        AU
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="AU"
        />
      </label>

      <label
        className="country"
      >
        BR
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="BR"
        />
      </label>

      <label
        className="country"
      >
        CA
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="CA"
        />
      </label>

      <label
        className="country"
      >
        CH
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="CH"
        />
      </label>

      <label
        className="country"
      >
        DE
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="DE"
        />
      </label>

      <label
        className="country"
      >
        DK
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="DK"
        />
      </label>

      <label
        className="country"
      >
        ES
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="ES"
        />
      </label>

      <label
        className="country"
      >
        FI
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="FI"
        />
      </label>
      
      <label
        className="country"
      >
        FR
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="FR"
        />
      </label>

      <label
        className="country"
      >
        GB
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="GB"
        />
      </label>

      <label
        className="country"
      >
        IE
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="IE"
        />
      </label>

      <label
        className="country"
      >
        IR
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NO"
        />
      </label>

      <label
        className="country"
      >
        NL
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NL"
        />
      </label>

      <label
        className="country"
      >
        NZ
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="NZ"
        />
      </label>

      <label
        className="country"
      >
        TR
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="TR"
        />
      </label>

      <label
        className="country"
      >
        US
        <input
          onChange={(anEvent) => addNationality(anEvent.target.value)}
          name="nationality"
          type="checkbox"
          value="US"
        />
      </label>
    </div>
  )
}