import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import jayLogo from '../../assets/jayBlogLogo2.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  /* Toggle */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
    console.log("test");
  };
  /* Toggle Ends */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Gen
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      toastAlerta('Usuário deslogado!', 'info')
      navigate('/login')
  }

  let navbarComponent

  if(usuario.token !== "") {
    navbarComponent = (
      <header className="absolute inset-x-0 top-0 z-50 bg-black dark:bg-white transition-all ease-in-out duration-600">
        <nav className="flex items-center justify-between p-4 lg:px-20" aria-label="Global">
          <div className="flex lg:flex-1 lg:pl">
              <Link to='/home' className="-m-1.5 p-1.5"><span className="sr-only">Your Company</span>
                <img
                  className="h-22 w-auto"
                  src={jayLogo}
                  alt=""
                />
              </Link>
          </div>
          <div className="flex lg:hidden">
            <label className="mr-2 shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[30px] h-[30px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={faMoon} className="h-[20px] text-black dark:text-white"/>
            </label>
            
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white dark:text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center w-[800px] justify-end">
            <Link to='/home' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold'>Home</Link>
            <Link to='/postagens' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold'>Postagens</Link>
            <Link to='/temas' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03px-2 text-md font-bold'>Temas</Link>
            <Link to='/cadastroTema' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold'>Cadastrar Tema</Link>
            <Link to='/perfil' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold'>Sair</Link>
            <label className="hover:bg-orange_01 dark:hover:bg-orange_03 shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={faMoon} className="h-[30px] text-black dark:text-white"/>
            </label>
  
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black dark:bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white transition-all ease-in-out duration-600">
            <div className="flex items-center justify-between">
              <Link to='/home' className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}><span className="sr-only">Your Company</span>
                <img
                  className="h-22 w-auto"
                  src={jayLogo}
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white dark:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col justify-center items-center"> 
                  <Link to='/home' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black dark:hover:text-orange_02'>Home</Link>
                  <Link to='/postagens' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Postagens</Link>
                  <Link to='/temas' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Temas</Link>
                  <Link to='/cadastroTema' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Cadastrar Tema</Link>
                  <Link to='/perfil' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Perfil</Link>
                  <Link to='' onClick={logout} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Sair</Link>
                </div>

                <div className="py-2 gap-y-4 flex flex-col items-center justify-center">
                <p className='text-white font-bold dark:text-black'>Cor do fundo</p>
                <label className="shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                  <FontAwesomeIcon icon={faMoon} className="h-[30px] text-black dark:text-white"/>
                </label>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>  
    )
  }else{
    navbarComponent = (
      <header className="absolute inset-x-0 top-0 z-50 bg-black dark:bg-white transition-all ease-in-out duration-600">
        <nav className="flex items-center justify-between p-4 lg:px-20" aria-label="Global">
          <div className="flex lg:flex-1 lg:pl">
              <Link to='/home' className="-m-1.5 p-1.5"><span className="sr-only">Your Company</span>
                <img
                  className="h-22 w-auto"
                  src={jayLogo}
                  alt=""
                />
              </Link>
          </div>
          <div className="flex lg:hidden">
            <label className="mr-2 shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[30px] h-[30px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={faMoon} className="h-[20px] text-black dark:text-white"/>
            </label>
            
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white dark:text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4 lg:items-center w-[800px] justify-end">
            <Link to='/home' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 px-2 text-md font-bold'>Home</Link>
            <Link to='/login' className='hover:text-orange_01 transiton-all ease-in-out duration-300 text-white dark:text-black dark:hover:text-orange_03 text-md font-bold mr-4 '>Entrar</Link>
            <label className="hover:bg-orange_01 dark:hover:bg-orange_03 shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={faMoon} className="h-[30px] text-black dark:text-white"/>
            </label>
  
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black dark:bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white transition-all ease-in-out duration-600">
            <div className="flex items-center justify-between">
              <Link to='/home' className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}><span className="sr-only">Your Company</span>
                <img
                  className="h-22 w-auto"
                  src={jayLogo}
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white dark:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col justify-center items-center"> 
                  <Link to='/home' onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black dark:hover:text-orange_02'>Home</Link>
                  <Link to='/login'onClick={() => setMobileMenuOpen(false)} className='py-2 text-md font-bold active:text-orange_03 text-white dark:text-black'>Entrar</Link>
                </div>

                <div className="py-2 gap-y-4 flex flex-col items-center justify-center">
                <p className='text-white font-bold dark:text-black'>Cor do fundo</p>
                <label className="shadow-lg shadow-black-500/50 bg-white dark:bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer" onClick={handleThemeSwitch}>
                  <FontAwesomeIcon icon={faMoon} className="h-[30px] text-black dark:text-white"/>
                </label>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>  
    )
  }

  return (
      <>
       {navbarComponent}
      </>
  )
}

export default Navbar