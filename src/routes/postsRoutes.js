import express from "express"
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js"
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {                           // Define as rotas usando o objeto express "app"
	app.use(express.json())                         // Permite que o servidor interprete requisições com corpo no formato JSON
	app.get("/posts", listarPosts)                  // Rota para buscar todos os posts
	app.post("/posts", postarNovoPost)              // Rota para criar um post
	app.post("/upload", upload.single("imagem"), uploadImagem)      // rota para upload de imagens
}

export default routes