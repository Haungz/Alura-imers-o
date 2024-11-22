import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)      // Conecta ao banco de dados utilizando a string de conexao fornecida como variável de ambiente

export async function getTodosPosts() {         // Função assincrona para buscar todos os posts no banco de dados
    const db = conexao.db("imersao-alura")      // conexao.db acessa o banco de dados de nome "imersao-alura"
    const colecao = db.collection("posts")      // db.collection acessa a coleção do banco db chamada "posts"
    return colecao.find().toArray()             // Retorna uma array com todos os documentos da coleção
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-alura")      
    const colecao = db.collection("posts")      
    return colecao.insertOne(novoPost)     
}    

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-alura")      
    const colecao = db.collection("posts") 
    const objID = ObjectId.createFromHexString(id)      
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}) 
}