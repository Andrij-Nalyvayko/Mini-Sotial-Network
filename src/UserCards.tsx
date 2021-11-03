import React from 'react';
import { Users } from './Types/Users';

type Props = {
  users: Users[],
}

export const UserCards: React.FC<Props> = ({ users }) => {

  return (
    <div className="cards">
      {users.map((user: Users) => {
        return (
          <div key={user.userID} className="my-network__card">

            <div className="my-network__card__img">
              <img src={user.photoUrl} alt={`Not found img`}/>
            </div>

            <p>
              <strong>
                {user.fullName}
              </strong>
            </p>

            <p>
              {user.gender}
            </p>

            <p>
              {user.nationality}
            </p>

            <p>
              {user.birthdayData}
            </p>
          </div>)
      })}
    </div>
  )
}