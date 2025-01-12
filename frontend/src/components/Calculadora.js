import { useState, useEffect } from "react"
import style from './Calculadora.module.css'
import { Link } from "react-router-dom"



function Calculadora(){

    let [calculadora, setCalculadora] = useState('')
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/dadosRedesSociais')
        .then((reponse) => reponse.json())
        .then((data) => setCalculadora(data))
    }, [])
    /*Calculo De Visualização */
    const [valorBruto, setValorBruto] = useState('')

    let Calculando = () =>{
        setValorBruto(Number(calculadora[0].quantidadeVisualizacao) + Number(calculadora[1].quantidadeVisualizacao) + Number(calculadora[2].quantidadeVisualizacao) + Number(calculadora[3].quantidadeVisualizacao))
    }


    return(
        <div className={style.container}>
           <div className={style.containerConteudo}>
                <h1>Valor Brutos da Visualização Total das Redes Sociais</h1>
                <button onClick={Calculando}>Calcula Total</button>
                <>{valorBruto ? valorBruto: "Aperte o Botão Para Resultado"} Visualização</>
                <Link to='/'>Volta ao Inicio</Link>
            </div> 
        </div>
        
    )
}

export default Calculadora