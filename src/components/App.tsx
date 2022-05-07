import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const [state, _] = useState(1);
  return <div>{state}</div>;
};

export default hot(module)(App);
