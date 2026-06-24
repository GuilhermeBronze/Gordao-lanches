import { useState } from "react";
import "../styles/ExibitionContainer.css";
import TablesAndComands from "./TablesAndComands";
import NewTablePopup from "./NewTablePopup";

function ExibitionContainer() {
  const [tables, setTables] = useState([]);
  const [openTablePopup, setOpenTablePopup] = useState(false);

  function addTables(newTables) {
    setTables((actualTables) => [...actualTables, newTables]);
    setOpenTablePopup(!openTablePopup);
  }

  return (
    <div className="exibition-container">
      <div className="div-mesas" key={tables.id}>
        {tables.map((tables) => (
          <TablesAndComands tables={tables} />
        ))}
      </div>
      <button className="add-table" onClick={() => setOpenTablePopup(true)}>
        Adicionar uma mesa
      </button>

      {openTablePopup && (
        <NewTablePopup
          onClose={() => setOpenTablePopup(false)}
          onSave={addTables}
        />
      )}
    </div>
  );
}

export default ExibitionContainer;
