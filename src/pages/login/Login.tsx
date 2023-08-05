import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import jayLogo from '../../assets/jayBlogLogo.svg'
import videoBg from '../../assets/video.mp4'

/* Test */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  /* Tests */
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

  return (
    <>
      <div className="bg-black flex justify-center h-screen place-items-center font-bold">
      <video src={videoBg} autoPlay loop muted className="flex justify-center h-screen w-full place-items-center font-bold" />
        <div className="absolute w-[310px] sm:w-[400px] cardForm md:w-[500px] bg-slate-100 bg-opacity-90 dark:border-none p-6 lg:p-10 rounded-[3%] shadow-lg shadow-black-800 dark:bg-black dark:bg-opacity-80">
        <form
          className="flex justify-center items-center flex-col gap-4 w-full"
          onSubmit={login}
        >
          <img src={jayLogo} alt="" className='w-[150px] mb-2' />
          <div className="flex flex-col w-full text-black dark:text-white">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="user@gen.com"
              className="w-full mt-2 border-2 border-slate-700 rounded p-2 ring-2 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_02"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full text-black dark:text-white">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full mt-2 border-2 border-slate-700 rounded p-2 ring-1 ring-inset ring-orange_03 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow_01"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            type="submit"
            className="shadow-lg shadow-black-500/50 rounded bg-orange_03 dark:bg-orange_03 hover:bg-orange_01 dark:hover:bg-orange_01 text-white w-1/2 py-2 flex justify-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-800 w-full dark:border-white" /> 

          <div className="flex flex-col items-center">
            <p className="text-black dark:text-white">Ainda não tem uma conta?</p>
            <Link to="/cadastro" className="text-orange_01 dark:text-orange_03 hover:underline hover:text-orange_03 dark:hover:text-orange_01">Cadastre-se</Link>
          </div>

          <hr className="border-slate-800 w-full dark:border-white" /> 

          <div className="flex flex-col gap-y-2 items-center justify-cente">
            <h1 className="text-black dark:text-white">Cor do fundo</h1>
            <label
              className="hover:bg-orange_03 dark:hover:bg-orange_01 shadow-lg shadow-black-500/50 bg-black dark:bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer"
              onClick={handleThemeSwitch}
            >
              <FontAwesomeIcon
                icon={faMoon}
                className="h-[30px] text-white dark:text-black"
              />
            </label>
          </div>
        </form>
        </div>
      </div>
      {/* <div className="fundoLogin hidden lg:block"></div> */}
      
    </>
  );
}

export default Login;
