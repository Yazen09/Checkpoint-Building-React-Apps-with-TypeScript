import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Greeting name="Yazen" />
      <hr style={{ margin: '20px 0' }} />
      <Counter />
    </div>
  );
};

export default App;
