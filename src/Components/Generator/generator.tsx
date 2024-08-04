import React, { useState } from "react";
import './generator.css';

const fragments: string[][] = [["Ar","Be","Ka","Lu","Mor","Za"]
                  ,["gon", "driel", "lian", "thor", "wen", "zor"]
                  ,["dor", "ion", "las", "mir", "th", "wen"]
                  ,["te", "mirr","wen","gamon","tiel","bar"]];

export const Generator: React.FC = () => {
    const [randomName, setRandomName] = useState("");

    const generate = ()=>{
        let size: number = Math.ceil(Math.random() * fragments.length);
        if(size === 1) size = 2;
        let result: string = "";
        let hasApostrophe: boolean = false;
        for(let i: number = 0; i < size;i++){
            if(i >= 1 && i !== size-1 && Math.random() < 0.2 && !hasApostrophe){
                result+= "'";
                hasApostrophe = true;
            }else
                result+=fragments[i][Math.floor(Math.random() * fragments[i].length)]
        }
        setRandomName(result);
    }

        return <div className="generator">
            <h1>Aperte em gerar e crie um nove personagem para suas campanhas</h1>
            <div>
                <div className="output"><p>{randomName}</p></div>
                <button onClick={generate}>Gerar</button>
            </div>
        </div>
    
}
