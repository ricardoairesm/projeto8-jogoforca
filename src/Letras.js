import { render } from "@testing-library/react";
import React, { useState, useRef } from "react";

let a = 0;
let b = 0;




export default function Letras(props) {
 

    function testarLetra(e) {
        if (contador < 6) {
            if (e.target.className == "caixinhaLetrasJogo") {
                if (palavraArray.includes(alfabeto[e.target.id])) {
                    for (let i = 0; i < palavra.length; i++) {
                        if (palavra[i] == alfabeto[e.target.id]) {
                            letrasTrocadas[i] = alfabeto[e.target.id];
                            functionSoletrada(letrasTrocadas);
                            e.target.className = "caixinhaLetrasInicial";
                            e.target.onClick = "";
                            a++;
                            functionAcertos(a);
                        }
                    }
                }
                else {
                    b = contador + 1;
                    functionContador(b);
                    functionForca(`./assets/forca${b}.png`);
                    console.log(b);
                    e.target.className = "caixinhaLetrasInicial";
                    e.target.onClick = "";
                }

                if (b == 6) {
                    functionVitoria("vermelho");
                    functionSoletrada(palavraArray);
                    functionMudarEstilo("caixinhaLetrasInicial");
                    functionContador(0);
                    functionAcertos(0);
                    a = 0;
                    b = 0;
                }

                if (a == soletrada.length) {
                    functionVitoria("verde");
                    functionMudarEstilo("caixinhaLetrasInicial");
                    functionContador(0);
                    functionAcertos(0);
                    a = 0;
                    b = 0;
                }
            }
        }
        
    }




    const { forca, functionForca, palavra, palavraArray, soletrada, functionSoletrada, estiloInicial, functionMudarEstilo, functionVitoria, functionContador, functionAcertos, contador, acertos } = props;
    let letrasTrocadas = [...soletrada];
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    

    return (

        <div className="alfabeto">
            {alfabeto.map((letra, index) => <button data-test="letter" id={index} key={index} onClick={testarLetra} className={estiloInicial}>{letra}</button>)}
        </div>
    )


}