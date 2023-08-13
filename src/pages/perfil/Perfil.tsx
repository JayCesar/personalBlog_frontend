import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/login.jpg'
import { toastAlerta } from '../../utils/toastAlerta'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';


function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto rounded-2xl overflow-hidden px-4'>
      <div className='mt-48'>
        <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
        <div className="relative mt-[-1rem] h-72 gap-y-4 flex flex-col bg-orange_03 text-white text-2xl items-center justify-center">
          <p>Nome: {usuario.nome} </p>
          <p>Email: {usuario.usuario}</p>
          <div className='w-full flex justify-center'>
            <ModalPostagem />
          </div>
        </div>
       
    </div>
     
    </div>
  )
}

export default Perfil