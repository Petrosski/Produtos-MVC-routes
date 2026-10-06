import express from "express";
import { cadastrarProduto, listarProdutos, atualizarProduto, deletarProduto, buscarProdutoPorId } from "../controller/produtoController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarProduto);
router.get("/", listarProdutos);
router.get("/:indice", buscarProdutoPorId);
router.patch("/:indice", atualizarProduto);
router.delete("/:indice", deletarProduto);
//Declara que ser chamar a rota POST vai executar a função de cadastrarProduto do controller

export default router;
//torna publica a rota dentro do backend