import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './interfaces'

interface AppProps {
  header: string,
  extraText?: string,
}

function App({ header, extraText = 'default text' }: AppProps) {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = () => setUser({
    name: 'Michael',
    age: 23,
    country: 'USA',
    address: {
      street: 'average street',
      number: 5,
      zip: 23030
    },
    admin: false
  })

  return (
    <>
      <h1>{header}</h1>
      {extraText && <p>{extraText}</p>}
      <button onClick={fetchUser}>Fetch user</button>
      {user &&
        <p>{`Welcome user ${user.name}`}</p>}
    </>
  );
}

export default App;
