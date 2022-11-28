import React, { useState, useRef } from "react";
let contador = 0;
let acertos = 0;
export {contador};





export default function Letras(props) {

    function testarLetra(e) {
        if (contador < 6) {
            if (e.target.className == "caixinhaLetrasJogo") {
                if (palavraArray.includes(alfabeto[e.target.id])) {
                    for (let i = 0; i < palavra.length; i++) {
                        if (palavra[i] == alfabeto[e.target.id]) {
                            letrasTrocadas[i] = alfabeto[e.target.id];
                            functionSoletrada(letrasTrocadas);
                            console.log(i);
                            console.log(letrasTrocadas);
                            e.target.className = "caixinhaLetrasInicial";
                            e.target.onClick = "";
                            acertos++;
                        }
                    }   
                }
                else {
                    contador++;
                    functionForca(`./assets/forca${contador}.png`);
                    console.log(contador);
                    e.target.className = "caixinhaLetrasInicial";
                    e.target.onClick = "";
                }
    
                if (contador == 6) {
                    functionVitoria("vermelho");
                    functionSoletrada(palavraArray);
                    functionMudarEstilo("caixinhaLetrasInicial")
                }
    
                if (acertos == soletrada.length) {
                    functionVitoria("verde");
                    functionMudarEstilo("caixinhaLetrasInicial")
                }
            }
        }
    }

    
       
    const { forca, functionForca, palavra, palavraArray, soletrada, functionSoletrada, estiloInicial, functionMudarEstilo, functionVitoria} = props;
    let letrasTrocadas = [...soletrada];
    const [estilo, setEstilo] = useState('black');

   
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [click, setClick] = useState("caixinhaLetras");

    return (

        <div className="alfabeto">
            {alfabeto.map((letra, index) => <button data-test = "letter" id={index} key={index} onClick={testarLetra} className={estiloInicial}>{letra}</button>)}
        </div>
    )


}