import { useState } from 'react';
import style from './form.module.scss';

import { BiLike, BiDislike } from 'react-icons/bi'

function App() {

  const notasPossiveis: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [nota, setNota] = useState(10);
  return (
    <main className="container">
      <form action="">
        <div className={style.boxNotaGeral}>
          <p>Sua experiencia de compra com a Cedisa foi</p>
          <span className={style.notaSelecionada}>{nota}</span>
          <div className={style.containerNotas}>
            {notasPossiveis.map((nota, index) => {
              return (
                <span onClick={() => setNota(nota)} key={index}>{nota}</span>
              )
            })}
          </div>
        </div>
        <div onMouseOver={() => {
          const divElement = document.querySelector('form > div')
          divElement?.setAttribute('style', 'width:50%')
        }} onMouseLeave={() => {
          const divElement = document.querySelector('form > div')
          divElement?.setAttribute('style', 'width:65%')
        }} className={style.boxQuesitos}>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
            <div className={style.quesito}>
              <p>Texto padrão quesito</p>
              <div>
                <BiLike />
                <BiDislike />
              </div>
              
            </div>
          </div>
      </form>
    </main>
  )
}

export default App
