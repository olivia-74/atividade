import { useState } from 'react';
import Rotas from './rotas/rotas';
import { GlobalState } from './GlobalState/GlobalState';

function App() {

  return (
      <>
      <GlobalState>
        <Rotas/>
      </GlobalState>
      </>
  );
}

export default App;
