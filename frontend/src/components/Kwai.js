import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import style from './Kwai.module.css'



function Kwai(){
    let [pedidoKwai, setPedidoKwai] = useState('')
    useEffect(() =>{
        fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
        .then((reponse) => reponse.json())
        .then((data) => setPedidoKwai(data[1]))
    }, [])




    return(
        <div className={style.container}>
            <div className={style.containerConteudo}>
                <img src="" alt="" />
                <h1>{pedidoKwai.titulo}</h1>
                <p>Quantidade de Visualização: {pedidoKwai.quantidadeVisualizacao} Visualização</p>
                <Link to="/instagram" className={style.botaoLink}>Instagram</Link>
            </div>
        </div>
        
    )
}

export default Kwai