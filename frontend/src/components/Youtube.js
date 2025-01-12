import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './Youtube.module.css'


function Youtube(){

    let [pedidoYoutube, setPedidoYoutube] = useState('')
    useEffect(() =>{
        fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
        .then((reponse) => reponse.json())
        .then((data) => setPedidoYoutube(data[0]))
    }, [])




    return(
        <div className={style.container}>
            <div className={style.containerConteudo}>
                <img src="" alt="" />
                <h1>{pedidoYoutube.titulo}</h1>
                <p>Quantidade de Visualização: {pedidoYoutube.quantidadeVisualizacao} Visualização</p>
                <Link to="/kwai" className={style.botaoLink}>Kwai</Link>
            </div>
        </div>
    )
}

export default Youtube