export default function (qntCarrinho, setQntCarrinho) {

    function add () {
        adicionaProduto(produtos, qntCarrinho)
        setQntCarrinho(1)
        alert("Item adicionado!")

    }
    function somar (){

        setQntCarrinho(qntCarrinho + 1)
    }

    function subtrair () {
        qntCarrinho > 1 ?
        setQntCarrinho(qntCarrinho - 1) :
        setQntCarrinho(1)
    }

    const somaCarrinho = (carrinho) => {
        const total = carrinho.reduce((acumulador, item) => acumulador + item.totalItem, 0)
    
        return total
        }

    const adicionaProduto = (produto, qntCarrinho) => {
        const item = {
            id: produto.id,
            name: produto.name,
            preco: produto.value,
            totalItem: qntCarrinho * produto.value,
            quantidade: qntCarrinho
    
        }
        setCarrinho([...carrinho, item])
        }

    const removeProduto = (itemDeletado) => {

        const novoCarrinho = carrinho.filter(
            (item) => item.id !== itemDeletado.id);
    
        setCarrinho(novoCarrinho);
          }

    const finalizarCompra = () => {
    setCarrinho([]);
    localStorage.clear();
    setTelas(tela.telaFinal)
    }
}