import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import './CardPostagem.css';

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (

      <div className='mt-32'>
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between w-full'>
          <div className=''>
            <div className="flex w-full py-2 px-4 items-center gap-4 bg-orange_03">
              <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
              <h3 className='text-lg font-bold text-center uppercase dark:text-white'>{post.usuario?.nome}</h3>
            </div>
            <div className='p-10'>
              <h4 className='text-lg font-semibold uppercase dark:text-white'>{post.titulo}</h4>
              <p className='dark:text-white'>Tema: {post.tema?.descricao}</p>
              <p className='dark:text-white'>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                      }).format(new Date(post.data))}</p>
            </div>
          </div>
          <div className="flex">
          <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-orange_03 hover:bg-orange_01 flex items-center justify-center py-2'>
              <button>Editar</button>
            </Link>
            <Link to={`/deletarPostagem/${post.id}`} className='bg-gray-200 dark:text-black dark:bg-gray-20 text-black hover:text-white hover:bg-red-700 w-full flex items-center justify-center dark:hover:text-white'>
              <button>Deletar</button>
            </Link>
          </div>
        </div> 
      </div>
    
  )
}

export default CardPostagem