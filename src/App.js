import React from 'react';
import './App.css';

import WordCard from './WordCard';
import NewWord from './NewWord';

const word = "Hello";
const newword = "Monday";

function App() {
  return (
    <div>
        <WordCard value={word}/>
        <NewWord value={newword}/>
    </div>
  );
}

export default App;
