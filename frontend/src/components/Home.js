import style from './Home.module.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';

function Home(){
    const [redesApi, setRedesApi] = useState('')


    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
      .then((reponse) => reponse.json())
      .then((data) => setRedesApi(data[4]))
    }, [])
  
  
    /*Práticas de Manipulação de strings*/
    let primeiraPalavraPrimeiroParagrafo = 'Por45234Psfp'
    const LetraP = primeiraPalavraPrimeiroParagrafo.charAt(8)
  
    return(
        <div className={style.container}>
            <div className={style.containerConteudo}>
                <h1>{redesApi.titulo}</h1>
                <p>{LetraP}rojeto feito para da exemplo de como que API, possa trazer diversas posibilidades, usaremos as infomação abaixo como exemplo, tendo titulos, quantidades de visualização, e o valor bruto delas</p>
                <Link to="/youtube" className={style.botaoLink}>Próxima Página Youtube</Link>
             </div>
        </div>
    )
}

export default Home