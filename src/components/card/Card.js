import {CardsContainer, ProdutoNome, ProdutoP, Botao, BotaoNum, Numbers, Imagem } from "./styled";

export default function Card () {

    return (

        <CardsContainer>
        <Imagem src={produtos.url} alt={produtos.name}/>
        <ProdutoNome>{produtos.name}</ProdutoNome>
        <ProdutoP>R$: {produtos.value}</ProdutoP>
        <Numbers>
          <BotaoNum onClick={somar}>+</BotaoNum>
          <ProdutoP>{qntCarrinho}</ProdutoP>
          <BotaoNum onClick={subtrair}>-</BotaoNum>
        </Numbers>

        <Botao onClick={()=>add()}>adicionar ao carrinho</Botao>
        </CardsContainer>
    )
}