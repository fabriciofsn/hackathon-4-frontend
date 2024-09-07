import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './templates/login/Login';
import Dashboard from './templates/dashboard/Dashboard';
// import CadastrarDocente from './templates/cadastrar-docente/CadastrarDocente';
// import CadastrarAluno from './templates/cadastrar-aluno/CadastrarAluno';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/cadastrar/docente" element={<CadastrarDocente />} />
        <Route path="/cadastrar/aluno" element={<CadastrarAluno />} />
         */}
      </Routes>
    </Router>
  );
};

export default App;
