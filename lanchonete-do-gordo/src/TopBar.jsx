import './styles/TopBar.css'


function TopBar() {
    return (
      <div className="top-bar-container">
        <div className="top-bar-items">Arquivo</div>
        <div className="top-bar-items">Financeiro</div>
        <div className="top-bar-items">Vendas</div>
        <div className="top-bar-items">Configurações</div>

      </div>
    );
  }

  export default TopBar;