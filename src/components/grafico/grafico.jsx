import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Grafico = () => {
  const [docentes, setDocentes] = useState();
  const [alunos, setAlunos] = useState();

  const token = localStorage.getItem('token');
  useEffect(() => {
    axios
      .get('http://localhost:3000/docente', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setDocentes(response.data.length));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/aluno', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setAlunos(response.data.length));
  }, []);

  const data = {
    labels: ['Métricas'],
    datasets: [
      {
        label: 'Quantidade de Alunos Matriculados',
        data: [alunos && alunos],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Quantidade de Professores Cadastrados',
        data: [docentes && docentes],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Métricas Acadêmicas
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafico;
