import { useState } from "react";
import "../styles/NewTablePopup.css";

function NovaMesaModal({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [numero, setNumero] = useState("");
  const [temVariasComandas, setTemVariasComandas] = useState(false);
  const [comandasTexto, setComandasTexto] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // evita que a página recarregue (comportamento padrão de <form>)

    if (!numero.trim()) {
      setErro("O número da mesa é obrigatório.");
      return;
    }

    // Se o usuário marcou "várias comandas", transformamos o texto
    // "101, 102, 103" em um array: ["101", "102", "103"]
    let comandas = [];
    if (temVariasComandas) {
      comandas = comandasTexto
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c !== "");
    }

    const novaMesa = {
        id: Date.now(),
        name: name.trim(),
        number: numero.trim(),
        comands: comandas,
    };

    onSave(novaMesa); // entrega a mesa pronta pro componente pai
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <h2>Nova mesa</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Nome (opcional)
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Mesa da janela"
            />
          </label>

          <label>
            Número da mesa *
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Ex: 12"
            />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={temVariasComandas}
              onChange={(e) => setTemVariasComandas(e.target.checked)}
            />
            Essa mesa terá mais de uma comanda?
          </label>

          {temVariasComandas && (
            <label>
              Números das comandas (separados por vírgula)
              <input
                type="text"
                value={comandasTexto}
                onChange={(e) => setComandasTexto(e.target.value)}
                placeholder="Ex: 101, 102, 103"
              />
            </label>
          )}

          {erro && <p className="modal-erro">{erro}</p>}

          <div className="modal-botoes">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NovaMesaModal;