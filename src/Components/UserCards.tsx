import React from 'react';
import { User } from '../Types/Users';

type Props = {
  users: User[],
}

export const UserCards: React.FC<Props> = ({ users }) => {

  console.log(users);

  return (
    <div className="cards">
      {users.map((user: User) => {
        return (
          <div key={user.dob.date} className="my-network__card">

            <div className="my-network__card__img">
              <img src={user.picture.large} alt={`Not found img`}/>
            </div>

            <p>
              <strong>
                {`${user.name.first} ${user.name.last}`}
              </strong>
            </p>

            <p>
              {user.gender}
            </p>

            <p>
              {user.nat}
            </p>

            <p>
              {user.dob.date.split('T')[0]}
            </p>
          </div>)
        })
      }
    </div>
  )
}