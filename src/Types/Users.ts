export interface User {
  id: {name: string, value: string},
  picture: {large: string},
  name: {first: string, last: string},
  dob: {date: string, age: number },
  nat: string,
  gender: string,
}