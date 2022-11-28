import React, { useState } from "react";
export default function Chute(props) {
    const { palavra, functionSoletrada, functionVitoria, palavraArray, functionForca, functionMudarEstilo, estiloInicial } = props;
    const [chute, setChute] = useState("");

    function testarChute() {
        if (estiloInicial == "caixinhaLetrasJogo") {
            if (chute == palavra) {
                functionVitoria("verde");
                functionSoletrada(palavraArray);
                functionMudarEstilo("caixinhaLetrasInicial");
            }
            else {
                functionVitoria("vermelho");
                functionSoletrada(palavraArray);
                functionForca("./assets/forca6.png");
                functionMudarEstilo("caixinhaLetrasInicial");
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