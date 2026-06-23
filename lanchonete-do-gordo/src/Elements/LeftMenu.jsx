import '../styles/LeftMenu.css'

function LeftMenu() {
  return (
    <div className="left-menu-container">
      <div>
        <strong>*menu hambugue*</strong>
        <div>Arquivo</div>
        <div>Financeiro</div>
        <div>Vendas</div>
        <div>Configurações</div>
      </div>
      <br />
      <div><strong>*Logo*</strong></div>
      <div>Mesas</div>
      <div>Encomendas</div>
      <div>Cadastros</div>
    </div>
  );
}

export default LeftMenu;
