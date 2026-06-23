import '../styles/LeftMenu.css'

function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div>
        <span className="material-symbols-outlined">menu</span>
        <div className="left-menu-items">Arquivo</div>
        <div className="left-menu-items">Financeiro</div>
        <div className="left-menu-items">Vendas</div>
        <div className="left-menu-items">Configurações</div>
      </div>
      <br />
      <div className="left-menu-items">*Logo*</div>
      <div className="left-menu-items">Mesas</div>
      <div className="left-menu-items">Encomendas</div>
      <div className="left-menu-items">Cadastros</div>
    </div>
  );
}

export default LeftMenu;
