import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-orange_03 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 hover:text-black bg-orange_03 hover:bg-green-400 transition-all ease-in-out duration-300 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100hover:text-black bg-orange_01 hover:bg-orange_02 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas