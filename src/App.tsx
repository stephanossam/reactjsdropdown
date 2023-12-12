import React from 'react';
import './App.css';
import styled from "styled-components";
import DropDownSelect from './components/dropdown'

function App() {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <div className="App">
        <DropDownSelect selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
