import React from "react";
import CadastroVeiculo from "./components/CadastroVeiculo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Sistema de Cadastro</h1>
      <CadastroVeiculo />
    </div>
  );
}

export default App;
