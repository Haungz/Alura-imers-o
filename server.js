import express from "express"
import routes from "./src/routes/postsRoutes.js"

const app = express()
routes(app)

app.listen(3000, () => {                         // Inicia o servidor na porta 3000 
	console.log("Servidor escutando...")
})

app.get("/posts", async (req,res) => {          // Rota para buscar todos os posts//await precisa do async
    const posts = await getTodosPosts()         // chama a função para buscar todos os posts
	res.status(200).json(posts)                 // Envia uma resposta http com status 200 (ok) e os posts no formato JSON na porta 2000
})

/*function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req,res) => {
	const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index])
})*/