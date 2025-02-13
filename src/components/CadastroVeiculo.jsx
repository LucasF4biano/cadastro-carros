import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroVeiculo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Cadastro de Veículo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow-lg">
        {/* Placa */}
        <div className="mb-3">
          <label className="form-label">Placa:</label>
          <input
            type="text"
            className={`form-control ${errors.placa ? "is-invalid" : ""}`}
            {...register("placa", {
              required: "A placa é obrigatória",
              pattern: { value: /^[A-Z]{3}-\d{4}$/, message: "Formato inválido (AAA-0000)" },
            })}
            placeholder="Ex: ABC-1234"
          />
          {errors.placa && <div className="invalid-feedback">{errors.placa.message}</div>}
        </div>

        {/* Modelo */}
        <div className="mb-3">
          <label className="form-label">Modelo:</label>
          <input
            type="text"
            className={`form-control ${errors.modelo ? "is-invalid" : ""}`}
            {...register("modelo", { required: "O modelo é obrigatório" })}
          />
          {errors.modelo && <div className="invalid-feedback">{errors.modelo.message}</div>}
        </div>

        {/* Marca */}
        <div className="mb-3">
          <label className="form-label">Marca:</label>
          <input
            type="text"
            className={`form-control ${errors.marca ? "is-invalid" : ""}`}
            {...register("marca", { required: "A marca é obrigatória" })}
          />
          {errors.marca && <div className="invalid-feedback">{errors.marca.message}</div>}
        </div>

        {/* Ano de Fabricação */}
        <div className="mb-3">
          <label className="form-label">Ano de Fabricação:</label>
          <input
            type="number"
            className={`form-control ${errors.ano ? "is-invalid" : ""}`}
            {...register("ano", {
              required: "O ano é obrigatório",
              min: { value: 1900, message: "Ano inválido" },
              max: { value: new Date().getFullYear(), message: "Ano inválido" },
            })}
          />
          {errors.ano && <div className="invalid-feedback">{errors.ano.message}</div>}
        </div>

        {/* Cor */}
        <div className="mb-3">
          <label className="form-label">Cor:</label>
          <input
            type="text"
            className={`form-control ${errors.cor ? "is-invalid" : ""}`}
            {...register("cor", { required: "A cor é obrigatória" })}
          />
          {errors.cor && <div className="invalid-feedback">{errors.cor.message}</div>}
        </div>

        {/* Chassi */}
        <div className="mb-3">
          <label className="form-label">Chassi:</label>
          <input
            type="text"
            className={`form-control ${errors.chassi ? "is-invalid" : ""}`}
            {...register("chassi", {
              required: "O chassi é obrigatório",
              minLength: { value: 17, message: "O chassi deve ter 17 caracteres" },
              maxLength: { value: 17, message: "O chassi deve ter 17 caracteres" },
            })}
          />
          {errors.chassi && <div className="invalid-feedback">{errors.chassi.message}</div>}
        </div>

        {/* Renavam */}
        <div className="mb-3">
          <label className="form-label">Renavam:</label>
          <input
            type="number"
            className={`form-control ${errors.renavam ? "is-invalid" : ""}`}
            {...register("renavam", {
              required: "O Renavam é obrigatório",
              minLength: { value: 11, message: "O Renavam deve ter 11 dígitos" },
              maxLength: { value: 11, message: "O Renavam deve ter 11 dígitos" },
            })}
          />
          {errors.renavam && <div className="invalid-feedback">{errors.renavam.message}</div>}
        </div>

        {/* Tipo de Combustível */}
        <div className="mb-3">
          <label className="form-label">Tipo de Combustível:</label>
          <select
            className={`form-select ${errors.combustivel ? "is-invalid" : ""}`}
            {...register("combustivel", { required: "Selecione um tipo de combustível" })}
          >
            <option value="">Selecione...</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Etanol">Etanol</option>
            <option value="Diesel">Diesel</option>
            <option value="GNV">GNV</option>
            <option value="Elétrico">Elétrico</option>
          </select>
          {errors.combustivel && <div className="invalid-feedback">{errors.combustivel.message}</div>}
        </div>

        {/* Botão de Envio */}
        <button type="submit" className="btn btn-primary w-100">
          Cadastrar Veículo
        </button>
      </form>
    </div>
  );
};

export default CadastroVeiculo;
