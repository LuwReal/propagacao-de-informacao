import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import style from './Instagram.module.css'



function Instagram(){

    let [pedidoInstagram, setPedidoInstagram] = useState('')
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
        .then((reponse) => reponse.json())
        .then((data) => setPedidoInstagram(data[2]))
    },[])


    return(
        <div className={style.container}>
            <div className={style.containerConteudo}>
                <img src="" alt="" />
                <h1>{pedidoInstagram.titulo}</h1>
                <p>Quantidade de Visualização: {pedidoInstagram.quantidadeVisualizacao} Visualização</p>
                <Link to="/tiktok" className={style.botaoLink}>TikTok</Link>
            </div> 
        </div>
    )
}

export default Instagram