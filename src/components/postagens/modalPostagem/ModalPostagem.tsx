import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='sm:text-sm md:text-md rounded bg-white bg-gradient-to-br from-orange_01 to-orange_02 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none transition-all ease-in-out duration-300 text-white py-3 px-4 border-2 border-orange_01 font-bold '>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;