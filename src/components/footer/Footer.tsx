import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-black py-4 dark:bg-white">
          <div className="container flex flex-col items-center py-4 text-center px-4 sm:px-0">
            <p className='text-sm md:text-xl font-semibold text-white dark:text-black'>Blog pessoal Generation | Copyright: {data}</p>
            <div className='flex gap-2 mt-4'>
              <LinkedinLogo size={40} className='text-white hover:text-orange_01 dark:text-black dark:hover:text-orange_01'/>
              <InstagramLogo size={40} className='text-white hover:text-orange_01 dark:text-black dark:hover:text-orange_01' />
              <LinkedinLogo size={40} className='text-white hover:text-orange_01 dark:text-black dark:hover:text-orange_01'/>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer