import { Link } from "react-router-dom";
import React from 'react'

export default function Header() {
  return (
    <header className="bg-neutral-800 font-bold text-2xl text-white opacity-95">
        <nav className="h-20 flex justify-between items-center  ml-72 mr-72">
            <Link to='/'><p className="text-orange-500  text-3xl pl-8">Mn</p></Link>
            <div className="flex gap-16 pr-10">
              <Link to='/'>Home</Link>
              <Link to='Projetos'>Projetos</Link>
              <Link to='Contato'>Contato</Link>
            </div>
        </nav>
    </header>
  )
}
