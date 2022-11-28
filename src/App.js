import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import Chute from "./Chute";
import React, { useState } from "react";





export default function App(props) {
    
 
    

    const [estadoForca, setEstadoForca] = useState("./assets/forca0.png");
    const [palavraEscolhida, setPalavraEscolhida] = useState("");
    const [soletrada, setSoletrada] = useState([]);
    const [palavraArray, setPalavraArray] = useState([]);
    const [estiloInicial, setEstiloInicial] = useState("caixinhaLetrasInicial");
    const [vitoria, setVitoria] = useState('preto');
    const [contador, setContador] = useState(0);
    let [acertos, setAcertos] = useState(0);
    



    return (
        <>
            <div className="jogo">
                <Jogo
                    forca={estadoForca}
                    palavra={palavraEscolhida}
                    functionPalavra={setPalavraEscolhida}
                    functionPalavraArray={setPalavraArray}
                    soletrada={soletrada}
                    functionSoletrada={setSoletrada}
                    functionMudarEstilo={setEstiloInicial}
                    vitoria={vitoria} 
                    functionContador = {setContador}
                    functionAcertos = {setAcertos}
                    functionForca = {setEstadoForca}
                    functionVitoria = {setVitoria}
                />
                <Letras
                    forca={estadoForca}
                    functionForca={setEstadoForca}
                    palavra={palavraEscolhida}
                    palavraArray={palavraArray}
                    soletrada={soletrada}
                    functionSoletrada={setSoletrada}
                    estiloInicial={estiloInicial}
                    functionMudarEstilo={setEstiloInicial}
                    functionVitoria={setVitoria}
                    functionContador = {setContador}
                    functionAcertos = {setAcertos}
                    contador = {contador}
                    acertos = {acertos}
                    
                />
                <Chute
                    palavra={palavraEscolhida}
                    functionSoletrada={setSoletrada}
                    functionVitoria={setVitoria}
                    palavraArray={palavraArray}
                    functionForca={setEstadoForca}
                    functionMudarEstilo={setEstiloInicial}
                    estiloInicial={estiloInicial}
                    functionContador = {setContador}
                    functionAcertos = {setAcertos}
                />

            </div>
        </>
    )
}

