import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) // Conecta ao banco de dados utilizando a string de conexao fornecida como variável de ambiente

export default async function getTodosPosts() {                // Função assincrona para buscar todos os posts no banco de dados
    const db = conexao.db("imersao-alura")      // conexao.db acessa o banco de dados de nome "imersao-alura"
    const colecao = db.collection("posts")      // db.collection acessa a coleção do banco db chamada "posts"
    return colecao.find().toArray()             // Retorna uma array com todos os documentos da coleção
}