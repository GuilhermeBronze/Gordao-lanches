//import { useState } from 'react'

import "./App.css";
import TopMenu from './Components/TopMenu.jsx'
import LeftMenu from './Components/LeftMenu.jsx'
import ExibitionContainer from'./Components/ExibitionContainer.jsx'

function App() {

  return (
    //APP RETURN
    <>
      <TopMenu />
      <LeftMenu />

      <ExibitionContainer/>
    </>
  );
}

export default App;
