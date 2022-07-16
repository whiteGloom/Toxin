import React, {useState} from 'react';
import './App.css';
import Checkbox from './widgets/checkbox';
import CheckboxTitled from './widgets/checkbox-titled';
import CheckboxRich from './widgets/checkbox-rich';

function App() {
  return (
    <div className="App">
      <Checkbox active={true} onClick={() => {}} />
      <CheckboxTitled active={true} onClick={() => {}} title={'Письменный стол'} />
      <CheckboxRich active={true} onClick={() => {}} title={'Широкий коридор'} description={'Hi! This is example of the rich description.'} />
    </div>
  );
}

export default App;
