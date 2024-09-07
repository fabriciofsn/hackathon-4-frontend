// src/pages/CadastrarAluno.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CadastrarAluno = () => {
  const [dataNascimento, setDataNascimento] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          Cadastrar Aluno
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="dataNascimento"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Data de Nascimento
            </label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Digite seu CPF"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cpfResponsavel"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              CPF do Responsável
            </label>
            <input
              type="text"
              id="cpfResponsavel"
              name="cpfResponsavel"
              placeholder="Digite o CPF do responsável"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="Digite seu telefone"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="curso"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Curso
            </label>
            <select
              id="curso"
              name="curso"
              className="block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Selecione um curso</option>
              <option value="curso1">Curso 1</option>
              <option value="curso2">Curso 2</option>
              <option value="curso3">Curso 3</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
          >
            Cadastrar
          </button>
        </form>
        <Link
          to="/dashboard"
          className="text-red bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mt-4 block w-full"
        >
          Cancelar
        </Link>
      </div>
    </div>
  );
};

export default CadastrarAluno;
