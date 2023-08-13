import './Home.css';
import imgHome from '../../assets/imgHome.svg'
import { Link } from 'react-router-dom'


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
                <Link to='/postagens'>
                  <button className='sm:text-sm md:text-md rounded bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 hover:text-white py-3 px-4 border-2 border-orange_01 font-bold '>Ver postagens</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default Home;