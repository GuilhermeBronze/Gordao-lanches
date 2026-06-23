import '../styles/LeftMenu.css'

function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div>
        <strong>*menu hambugue*</strong>
        <div className="left-menu-items">Arquivo</div>
        <div className="left-menu-items">Financeiro</div>
        <div className="left-menu-items">Vendas</div>
        <div className="left-menu-items">Configurações</div>
      </div>
      <br />
      <div className="left-menu-items"><strong>*Logo*</strong></div>
      <div className="left-menu-items">Mesas</div>
      <div className="left-menu-items">Encomendas</div>
      <div className="left-menu-items">Cadastros</div>
    </div>
  );
}

export default LeftMenu;
