import {v4 as uuidv4} from "uuid"
const usuariosCadastrados = []

class usuarioController{
    static criarUsuario(req, res){
        const novoUser = req.body
        novoUser.id = uuidv4()
        usuariosCadastrados.push(novoUser)
        return res.status(201).send({message:"usuário criado"})
    }
    static listarUsuarios(req, res){
        if(usuariosCadastrados.length == 0){
            return res.status(404).send({message:"sem usuários cadastrados"})
        }
        return res.status(200).send(usuariosCadastrados)
    }
    static listarUserPorId(req, res){
        const id = req.params.id
        const user = usuariosCadastrados.find((user) => user.id == id)
        if(user){
            return res.status(200).send(user)
        }else{
            return res.status(404).send({message: "usuário não existe"})
        }
        
    }
    static atualizarUser(req, res){
        const id = req.params.id
        let user = usuariosCadastrados.find((user) => user.id == id)
        if(user){
            const index = usuariosCadastrados.indexOf(user)
            usuariosCadastrados[index].name = req.body.name
            usuariosCadastrados[index].senha = req.body.senha
            usuariosCadastrados[index].username = req.body.username
            return res.status(200).send({message:"user atualizado"})
        }else{
            return res.status(404).send({message:"usuárionão encontrado"})
        }
        
    }
    static deletar(req, res){
        const id = req.params.id
        const user = usuariosCadastrados.find((user) => user.id === id)
        if(user){
            const index = usuariosCadastrados.indexOf(user)
            usuariosCadastrados.splice(index, 1)
            res.status(200).send({message: "usuário deletado"})
        }else{
            res.status(404).send({message: "usuário não encontrado"})
        }
        
    }
}
export default usuarioController