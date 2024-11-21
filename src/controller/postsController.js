import getTodosPosts from "../models/postModel.js"


export async function listarPosts(req,res) {              // Rota para buscar todos os posts                 //await precisa do async
	const posts = await getTodosPosts()                  // chama a função para buscar todos os posts
	res.status(200).json(posts)                         // Envia uma resposta http com status 200 (ok) e os posts no formato JSON na porta 2000
} 
	
export async function postarNovoPost(req,res) {
	const novoPost = req.body
	try {
		const postCriado = await criarPost(novoPost)
		res.status(200).json(postCriado)
	} catch(erro) {
		console.error(erro.message)
			res.status(500).json({"Erro": "Falha na requisição"})
		
	}
}