import express from "express"
import { listarPosts } from "../controller/postsController.js"

const routes = (app) => {
	app.use(express.json())                         // Permite que o servidor interprete requisições com corpo no formato JSON
	app.get("/posts", listarPosts)
}

export default routes