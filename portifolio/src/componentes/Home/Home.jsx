import React from 'react';
import HomeInfo from './HomeInfo';
import foto from '../imagens/foto.jpg';

export default function App() {
  const perfil = {
    imagemPerfil: foto,
    titulo: "Dev",
    nome: "Lucas Masaki",
    descricao: "Sou estudante de Engenharia de software da FIAP, residente em São Paulo, Brasil. Atualmente estudando Python, Arduino, Esp32, Cálculo, UX, Storytelling, Bootstrap, Sass, TailwindCss e React."
  };

  return (
    <div>
      <HomeInfo {...perfil} />
    </div>
  );
}

