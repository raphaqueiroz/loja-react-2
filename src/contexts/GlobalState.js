
import { GlobalContext } from "./GlobalContext"
import { useState, useEffect } from "react";

export const GlobalState = (props) => {

    const [pesquisaNome, setPesquisaNome] = useState("");
    const [pesquisaPrecoMax, setPesquisaPrecoMax] = useState("");
    const [carrinho, setCarrinho] = useState([]);
    const [pesquisaPrecoMin, setPesquisaPrecoMin] = useState("");

    useEffect( () => {

        const savedData = JSON.parse(localStorage.getItem("cart"))
        if(savedData){
          setCarrinho(savedData)
        } else {
          setCarrinho([])
        }
          
          }, []
      )
    
    
      useEffect(() => {
        if(carrinho.length !== 0){
          localStorage.setItem("cart", JSON.stringify(carrinho));
        }
        }, [carrinho])

    const data = {
        pesquisaNome,
        setPesquisaNome,
        pesquisaPrecoMax,
        setPesquisaPrecoMax,
        carrinho,
        setCarrinho,
        pesquisaPrecoMin,
        setPesquisaPrecoMin

    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )

}