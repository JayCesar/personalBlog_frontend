import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='flex flex-col overflow-hidden justify-between px-4 rounded-4xl'>
      <header className='py-2 px-6 bg-black text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
   
        <Link to={`/editarTema/${tema.id}`} className=' text-center w-full sm:text-sm md:text-md bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 hover:text-white py-3 px-4  font-bold '>
            <button>Editar</button>
          </Link>
        <Link to={`/deletarTema/${tema.id}`}  className=' text-center w-full sm:text-sm md:text-md bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 hover:text-white py-3 px-4 font-bold'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas