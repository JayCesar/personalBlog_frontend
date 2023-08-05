import React from 'react';
import homeLogo from '../../assets/login.jpg'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import imgHome from '../../assets/imgHome.svg'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    return (
        <>
        <div className="dark:bg-white flex justify-center items-center h-screen fundoHome">
          <div className='container text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4 px-4">
              <div className='w-[250px] mb-[-40px]'>
                <img src={imgHome} alt="imgHome" />
              </div>
              <h2 className='text-4xl font-bold text-center md:text-7xl'>Seja bem vinde!</h2>
              <p className='sm:text-sm md:text-xl text-center'>Expresse aqui sua opnião sobre filmes e séries!</p>
              <div className="flex justify-around gap-4">
                <ModalPostagem />
                <Link to='/postagens'>
                  <button className='sm:text-sm md:text-md rounded bg-white text-blue-800 hover:bg-orange_03 transition-all ease-in-out duration-300 hover:text-white py-2 px-4'>Ver postagens</button>
                </Link>
              </div>
            </div>
  
            {/* <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
            </div> */}
          </div>
        </div>
        {/* <ListaPostagens /> */}
      </>
    );
}

export default Home;