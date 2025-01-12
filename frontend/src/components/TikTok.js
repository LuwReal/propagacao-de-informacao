import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './TikTok.module.css'

function TikTok(){


    let [pedidoTikTok, setPedidoTikTok] = useState('')
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
        .then((reponse) => reponse.json())
        .then((data) => setPedidoTikTok(data[3]))
    }, [])


    return(
        <div className={style.container}>
           <div className={style.containerConteudo}>
                <img src="" alt="" />
                <h1>{pedidoTikTok.titulo}</h1>
                <p>Quantidade de Visualização: {pedidoTikTok.quantidadeVisualizacao} Visualização</p>
                <Link to="/calculadora" className={style.botaoLink}>Calculo Bruto da Visualização</Link>
            </div> 
        </div>
        
    )
}

export default TikTok