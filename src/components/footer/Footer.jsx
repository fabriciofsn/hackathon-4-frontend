import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [ano, setAno] = useState();
  useEffect(() => {
    const ano = new Date().getFullYear();
    setAno(ano);
  }, []);
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {ano} Instituição Acadêmica. Todos os direitos reservados.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="#" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contato
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
