import React, { useEffect, useState } from 'react';
import { Message } from '@ant/api-interfaces';
import { Ui} from '@ant/ui'

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to wordora!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <Ui />
      <div>{m.message}</div>
    </>
  );
};

export default App;
