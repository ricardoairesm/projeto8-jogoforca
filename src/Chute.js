import React, { useRef, useState } from "react";


export default function Chute(props) {
    const { palavra, functionSoletrada, functionVitoria, palavraArray, functionForca, functionMudarEstilo, estiloInicial, functionContador, functionAcertos, functionNewGame } = props;
    const [chute, setChute] = useState("");

    function testarChute() {
   

        if (estiloInicial == "caixinhaLetrasJogo") {
            if (chute == palavra) {
                functionVitoria("verde");
                functionSoletrada(palavraArray);
                functionMudarEstilo("caixinhaLetrasInicial");
                functionContador(0);
                functionAcertos(0);
                functionNewGame(false);
                setTimeout(() => {
                    functionNewGame(true)
                  }, 500);
               
            }
            else {
                functionVitoria("vermelho");
                functionSoletrada(palavraArray);
                functionForca("./assets/forca6.png");
                functionMudarEstilo("caixinhaLetrasInicial");
                functionContador(0);
                functionAcertos(0);
                functionNewGame(false);
                setTimeout(() => {
                    functionNewGame(true)
                  }, 500);
            
            }
            setChute("");
        }
        
    }
    return (<>
        <input data-test="guess-input" onChange={e => setChute(e.target.value)} />
        <div className="texto">Já sei a palavra!</div>
        <button onClick={testarChute} data-test="guess-button" className="chutar">Chutar</button>
    </>)

}