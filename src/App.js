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
    const [vitoria, setVitoria] = useState('black');
    const [estadoBotao, setEstadoBotao] = useState();



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
                    
                />
                <Chute
                    palavra={palavraEscolhida}
                    functionSoletrada={setSoletrada}
                    functionVitoria={setVitoria}
                    palavraArray={palavraArray}
                    functionForca={setEstadoForca}
                    functionMudarEstilo={setEstiloInicial}
                    estiloInicial={estiloInicial}
                />

            </div>
        </>
    )
}

