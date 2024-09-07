// src/components/AcademicDashboard.jsx
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Grafico from '../../components/grafico/grafico';

const Dashboard = () => {
  const nome = localStorage.getItem('nome');
  return (
    <div className="bg-gray-900 min-h-screen ">
      <Navbar />
      <header className="flex justify-between items-center py-4 px-6 bg-gray-800 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-white">
          Painel de Controle Acadêmico
        </h1>
        <div className="flex items-center">
          <span className="text-gray-300 mr-4">
            <strong>Olá, {nome}!</strong>
          </span>
        </div>
      </header>
      <main className="flex flex-wrap gap-6 p-2">
        <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-white mb-4">
            Desempenho dos Alunos
          </h2>
          <p className="text-gray-100 mb-6">
            Visualize relatórios de desempenho dos alunos por turma e por
            período.
          </p>
          <a
            href="#"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Relatórios
          </a>
        </div>
        <div className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-white mb-4">Professores</h2>
          <p className="text-gray-100 mb-6">Visualize e cadastre professores</p>
          <button
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            type="submit"
          >
            Cadastrar Professor
          </button>
        </div>
        <div className="flex-1 bg-gradient-to-r from-green-400 to-blue-400 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-white mb-4">Alunos</h2>
          <ul className="space-y-4 text-gray-100">
            <p>
              <strong>Cadastre um novo aluno</strong>
            </p>
            <button
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              type="submit"
            >
              Cadastrar Aluno
            </button>
          </ul>
        </div>
      </main>
      <Grafico />
      <Footer />
    </div>
  );
};

export default Dashboard;
