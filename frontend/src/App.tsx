import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ShoutOut } from './models/shoutOut';
import { addShoutOut, getAllShoutOuts } from './services/shoutOutService';
import ShoutOutRow from './ShoutOutRow';
import ShoutOutForm from './ShoutOutForm';

function App() {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    getAllShoutOuts().then(res => {
      setShoutOuts(res.data);
    });
  }, []);

  function handleAdd(shoutOut: ShoutOut) {
    setShoutOuts(prevShoutOuts => [...prevShoutOuts, shoutOut]);
    addShoutOut(shoutOut);
  }

  return (
    <div className="App">
      <h1>All Shout Outs</h1>
      {shoutOuts.map((so, i) =>
        <ShoutOutRow shoutOut={so} key={i}></ShoutOutRow>)}
      <ShoutOutForm onSubmit={handleAdd}></ShoutOutForm>
    </div>
  );
}

export default App;
