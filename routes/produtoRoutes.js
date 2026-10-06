import express from "express";
import { cadastrarProduto } from "../controller/produtoController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarProduto);
//Declara que ser chamar a rota POST vai executar a função de cadastrarProduto do controller

export default router;
//torna publica a rota dentro do backend