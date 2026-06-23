import { useState } from "react";
import "../styles/LeftMenu.css";

function LeftMenu() {
  const [openedMenu, setOpenedMenu] = useState(false);

  function toggleMenu() {
    setOpenedMenu(!openedMenu);
  }

  return (
    <div className="left-menu-container">
      <button className="hidden-menu-button" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>

      {openedMenu && (
        <>
          <div className="left-menu-items">Arquivo</div>
          <div className="left-menu-items">Financeiro</div>
          <div className="left-menu-items">Vendas</div>
          <div className="left-menu-items">Configurações</div>
        </>
      )}

      
      <div className="left-menu-items">*Logo*</div>
      <div className="left-menu-items">Mesas</div>
      <div className="left-menu-items">Encomendas</div>
      <div className="left-menu-items">Cadastros</div>
    </div>
  );
}

export default LeftMenu;
