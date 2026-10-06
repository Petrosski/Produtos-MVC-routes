import { Produto } from "../model/Produto.js"
import { cadastrar } from "../repository/produtoRepository.js"

export function cadastrarProduto(req, res){
    const {descricao, preco, peso} = req.body; 
    //pegar o json da req (requisição) e salvar em varaveis

    const produto = new Produto(descricao, preco, peso);

    cadastrar(produto);

    res.status(201).json(produto);
    //respondendo a quem chamou a rota, o status 201 (cadastrado) e no json o objeto produto
}