import { Produto } from "../model/Produto.js"
import { cadastrar, listar, deletar, atualizar, buscarPorId } from "../repository/produtoRepository.js"

export function cadastrarProduto(req, res){
    const {descricao, preco, peso} = req.body; 
    //pegar o json da req (requisição) e salvar em varaveis

    const produto = new Produto(descricao, preco, peso);

    cadastrar(produto);

    res.status(201).json(produto);
    //respondendo a quem chamou a rota, o status 201 (cadastrado) e no json o objeto produto
}

export function listarProdutos(req, res) {

    const produtos = listar();

    res.status(200).json(produtos);
}

export function buscarProdutoPorId(req, res) {

    const id = Number(req.params.indice);

    const produto = buscarPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
}


export function atualizarProduto(req, res) {

    const indice = Number(req.params.indice);

    const produto = buscarPorIndice(indice);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const { descricao, preco, peso } = req.body;

    if (descricao !== undefined) {
        produto.descricao = descricao;
    }

    if (preco !== undefined) {
        produto.preco = preco;
    }

    if (peso !== undefined) {
        produto.peso = peso;
    }

    atualizar(indice, produto);

    res.status(200).json(produto);
}


export function deletarProduto(req, res) {

    const indice = Number(req.params.indice);

    const produto = buscarPorId(indice);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Produto deletado com sucesso"
    });
}