import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import './CardPostagem.css';

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (

      <div className='mb-20 md:mt-20 lg:mb-0'>
        <div className='border-slate-900 border flex rounded-xl flex-col overflow-hidden justify-between w-full bg-neutral-700 dark:bg-neutral-700 opacity-4'>
          <div className=''>
            <div className="flex w-full p-2 px-4 items-center gap-4 bg-black">
              <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
              <h3 className='text-lg font-bold text-center uppercase text-white'>{post.usuario?.nome}</h3>
            </div>
            <div className='p-12'>
              <h4 className='text-lg font-semibold uppercase text-orange_02'>{post.titulo}</h4>
              <p className='text-neutral-200'><b>Tema:</b> {post.tema?.descricao}</p>
              <p className='text-neutral-200'>{post.texto}</p>
              <p className='text-neutral-200'><b>Data:</b> {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                      }).format(new Date(post.data))}</p>
            </div>
          </div>
          <div className="flex">
            <Link to={`/editarPostagem/${post.id}`} className=' text-center w-full sm:text-sm md:text-md bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 hover:text-white py-3 px-4  font-bold '>
              <button>Editar</button>
            </Link>
            <Link to={`/deletarPostagem/${post.id}`}  className=' text-center w-full sm:text-sm md:text-md bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 hover:text-white py-3 px-4 font-bold'>
              <button>Deletar</button>
            </Link>
          </div>
        </div> 


      </div>

      
    
  )
}

export default CardPostagem