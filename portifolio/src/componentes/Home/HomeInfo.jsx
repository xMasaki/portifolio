import React from 'react';
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa"

export default function HomeInfo({ imagemPerfil, titulo, nome, descricao }) {
  return (
    <div>
      <div className="flex">
        <div className='w-1/3 bg-orange-500 h-screen flex justify-center items-end'>
          <div className='flex justfy-center gap-16 mb-40'>
            <a href="https://www.linkedin.com/in/lucas-masaki-17040728a/"><FaLinkedin className='w-16 h-16 fill-neutral-800' /></a>
            <a href="https://github.com/xMasaki">< FaGithub className='w-16 h-16 fill-neutral-800' /></a>
            <a href="https://www.instagram.com/masaki.lucas/"><FaInstagram className='w-16 h-16 fill-neutral-800' /></a>
          </div>
        </div>
        <img className='absolute w-[30rem] h-[30rem] rounded-full start-1/3 -translate-x-2/4 -translate-y-2/4 shadow-[0_0_30px_0_rgba(0,0,0,0.3)] top-1/2' src={imagemPerfil} alt="perfil" />
        <div className="w-2/3 bg-neutral-800 h-screen flex justify-end">
          <div className="flex flex-col justify-center items-end mr-72">
            <div className='-translate-y-2/4 '>
              <p className="text-2xl font-bold text-neutral-400">{titulo}</p>
              <p className="text-5xl font-bold text-neutral-200">{nome}</p>
              <p className="text-xl font-semibold text-neutral-400 pt-5 w-[32rem]">{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
