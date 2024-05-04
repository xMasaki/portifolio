import React from 'react';

export default function Projetos2({ projetos }) {
  return (
    <div className="flex">
      <div className='bg-neutral-800 h-screen w-screen '>
        <h1 className="text-5xl font-bold text-orange-500 flex justify-center p-10">Projetos</h1>
        <div className="ml-72 mr-72 flex justify-between gap-3">
          {projetos.map(projeto => (
            <div key={projeto.nome} className="bg-orange-500 w-[25rem] h-[30rem] rounded-lg flex flex-col items-center">
              <h1 className="text-neutral-200 text-3xl font-bold pt-5">{projeto.nome}</h1>
              <img className='w-52 h-52 mt-3' src={projeto.imagem} alt={projeto.nome}/>
              <p className='p-4'>{projeto.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
