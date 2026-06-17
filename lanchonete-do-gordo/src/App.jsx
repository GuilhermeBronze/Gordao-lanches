//import { useState } from 'react'

import "./styles/App.css";
import TopBar from './TopBar.jsx'
import ExibitionMenu from './ExibitionMenu.jsx'
import ExibitionContainer from'./ExibitionContainer.jsx'

function App() {

  return (
    //APP RETURN
    <>
      <TopBar />
      <ExibitionMenu />

      <ExibitionContainer/>
    </>
  );
}

export default App;
