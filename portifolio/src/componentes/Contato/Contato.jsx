import React from 'react'

export default function Contato() {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');

    const handleChange = (key, event, setter) => {
        const value = event.target.value;
        localStorage.setItem(key, value);
        setter(value);
      };
      
    function submit(event) {
        event.preventDefault();
        console.log(`nome: ${localStorage.getItem('nome')}, email: ${localStorage.getItem('email')}, mensagem: ${localStorage.getItem('mensagem')}`)
    }

  return (
    <div className=' bg-neutral-800'>
        <div id='contato' className=' ml-[30rem] mr-[30rem] h-screen'>
        <h1 className='text-5xl font-bold text-center text-neutral-200 p-10'>Contato</h1>
        <form action="">
            <div>
                <div className='flex flex-col py-2'>
                    <label for='nome' className='text-neutral-200 text-2xl py-2'>Nome</label>
                    <input value={nome} onChange={e => handleChange('nome', e, setNome)} className='border-2 rounded-lg p-1 border-gray-300' type="text" name='nome' id='nome' placeholder='Lucas Masaki' />
                </div>
                <div className='flex flex-col py-2'>
                    <label for='email' className='text-neutral-200 text-2xl py-2'>E-mail</label>
                    <input value={email} onChange={e => handleChange('email', e, setEmail)} className='border-2 rounded-lg p-1 border-gray-300'  type="email" name='email' id='email' placeholder='Lucas@email.com' />
                </div>
                <div className='flex flex-col py-2 pb-5'>
                    <label for='mensagem' className='text-neutral-200 text-2xl py-2'>Mensagem</label>
                    <textarea  value={mensagem} onChange={e => handleChange('mensagem', e, setMensagem)}  className='border-2 rounded-lg p-1 border-gray-300'  rows={8} name='mensagem' id='mensagem' placeholder='Escreva a sua mensagem...'></textarea>
                </div>
            </div>
            <button onClick={submit} type='submit' className='bg-orange-500 text-neutral-800 p-3 rounded-lg text-2xl font-bold'>
                Enviar
            </button>
        </form>
        </div>
    </div>
  )
}
