import React, { useState } from "react";
import palavras from "./palavras";




export default function Jogo(props) {

    const { forca, palavra, functionPalavra, functionPalavraArray, soletrada, functionSoletrada, functionMudarEstilo, vitoria, functionContador, functionAcertos, functionForca, functionVitoria} = props;
    
    function escolherPalavra() {
        let novoArray = [];
        let novoSoletrada = [];
        functionContador(0);
        functionAcertos(0);
        functionForca("./assets/forca0.png");
        functionVitoria("preto");
        functionSoletrada([]);
        functionMudarEstilo("caixinhaLetrasJogo");
        

        const randomIndex = Math.floor(Math.random() * palavras.length);
        let palavraEscolhida = palavras[randomIndex];
        functionPalavra(palavraEscolhida);
        console.log(palavraEscolhida);
        for (let i = 0; i < palavraEscolhida.length; i++) {
            novoArray = [...novoArray, palavraEscolhida[i]];
        }
        functionPalavraArray(novoArray);
        console.log(novoArray);
        for (let i = 0; i < palavraEscolhida.length; i++) {
            novoSoletrada = [...novoSoletrada, "_"];
        }
        functionSoletrada(novoSoletrada);
        console.log(novoSoletrada);

        

    }


    return (
        <>
            <img  data-test = "game-image" src={forca} />
            <button data-test = "choose-word"  className="escolherJogo" onClick={escolherPalavra}>Escolher Palavra</button>
            <div className = {`soletrada ${vitoria}`} data-test = "word" data-answer = {palavra}>
                {soletrada.map((letra, index) => <div key={index} className="cadaLetra">{letra}</div>)}
            </div>
        </>
    )
}