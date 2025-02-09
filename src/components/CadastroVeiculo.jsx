import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CadastroVeiculo() {
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    marca: "",
    ano: "",
    cor: "",
    chassi: "",
    renavam: "",
    combustivel: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.placa) newErrors.placa = "Placa é obrigatória";
    if (!formData.modelo) newErrors.modelo = "Modelo é obrigatório";
    if (!formData.marca) newErrors.marca = "Marca é obrigatória";
    if (!formData.ano || isNaN(formData.ano)) newErrors.ano = "Ano inválido";
    if (!formData.cor) newErrors.cor = "Cor é obrigatória";
    if (!formData.chassi) newErrors.chassi = "Chassi é obrigatório";
    if (!formData.renavam) newErrors.renavam = "Renavam é obrigatório";
    if (!formData.combustivel) newErrors.combustivel = "Tipo de combustível é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados enviados:", formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center">Cadastro de Veículo</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          {Object.keys(formData).map((field) => (
            <div className="col-md-6" key={field}>
              <label className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`form-control ${errors[field] ? "is-invalid" : ""}`}
              />
              {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
            </div>
          ))}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary w-50">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
