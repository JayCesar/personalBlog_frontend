import { Link } from "react-router-dom";
import jayLogo from '../../assets/jayBlogLogo2.svg'

function Footer() {
  
  return (
      <footer className="bg-black pt-10 dark:bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">  
              <div className="mb-6 md:mb-0 flex justify-center sm:block">
                <Link to="/home" className="flex items-center">
                  <img
                    className="h-18 mr-3"
                    src={jayLogo}
                    alt="Jayblog logo"
                  />
                </Link>
              </div>
              <div className="grid grid-cols- text-center sm:text-left gap-8 sm:gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-orange_03">
                    Blog
                  </h2>
                  <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="/home"
                        className="hover:text-orange_02 dark:hover:text-orange_02"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/postagens"
                        className="hover:underline" 
                      >
                        Postagens
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/perfil"
                        className="hover:underline"
                      >
                        Perfil
                      </a>
                    </li>       
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-orange_03">
                    Social Midias
                  </h2>
                  <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://www.linkedin.com/in/jc-batista/" target="_blank" className="hover:underline ">
                        Linkedin
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="https://github.com/JayCesar" target="_blank" className="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="https://www.instagram.com/jay.cesaar/" target="_blank" className="hover:underline ">
                        Instagram
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FJayC3sar" target="_blank" className="hover:underline ">
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
           
              </div>
            </div>
            <hr className="my-6sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-left text-center">
              <span className="text-sm sm:text-center text-gray-400">
                © 2023{" "}
                <a href="/home" className="hover:underline">
                  Jayblog
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
      </footer>
    );
}

export default Footer;
