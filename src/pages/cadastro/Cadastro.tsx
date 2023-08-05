import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlerta } from '../../utils/toastAlerta'
import jayLogo from '../../assets/jayBlogLogo.svg'
import videoBg from '../../assets/video.mp4'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Erro no cadastro', 'erro')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="bg-black flex justify-center h-screen place-items-center font-bold">
      <video src={videoBg} autoPlay loop muted className="flex justify-center h-screen w-full place-items-center font-bold"/>
      <div className="absolute w-[310px] bg-black sm:w-[400px] cardForm md:w-[500px] bg-opacity-70 border-none p-6 lg:p-10 rounded-[25px] shadow-lg shadow-black-800">
        <form className='flex justify-center items-center flex-col gap-2 w-full' onSubmit={cadastrarNovoUsuario}>
          <img src={jayLogo} alt="" className='w-[150px]' />
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className='text-orange_01'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='text-orange_01'>Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="w-full border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className='text-orange_01'>Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="URL da foto"
              className="w-full border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='text-orange_01'>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='text-orange_01'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="w-full border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-4 mt-2">
            <button className='rounded text-white bg-orange_01 hover:bg-red-600 w-1/2 py-2 transition-all duration-[0.5s]' onClick={back}>
              Cancelar
            </button>
            <button className='rounded text-white bg-orange_03 transition-all duration-[0.5s] hover:bg-green-600 w-1/2 py-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Cadastro