import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  header: string
}

function App({ header }: AppProps) {
  return (
    <h1>{header}</h1>
  );
}

export default App;
