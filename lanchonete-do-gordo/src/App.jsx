//import { useState } from 'react'

import "./App.css";
import TopMenu from './Elements/TopMenu.jsx'
import LeftMenu from './Elements/LeftMenu.jsx'
import ExibitionContainer from'./Elements/ExibitionContainer.jsx'

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
