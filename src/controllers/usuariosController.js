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
            //testes para garantir  ue a requisição tem todos os dados
            if(!req.body.name){
                return res.status(500).send({message: "o campo name é obrigatório, caso não queira mudá-lo coloque o valor antigo"})
            }
            else if(!req.body.senha){
                return res.status(500).send({message: "o campo senha é obrigatório, caso não queira mudá-lo coloque o valor antigo"})
            }
            else if(!req.body.username){
                return res.status(500).send({message: "o campo username é obrigatório, caso não queira mudá-lo coloque o valor antigo"})
            }else{//possui todos os dados
                usuariosCadastrados[index].name = req.body.name
                usuariosCadastrados[index].senha = req.body.senha
                usuariosCadastrados[index].username = req.body.username
                return res.status(200).send({message:"user atualizado"})
            }
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
            return res.status(200).send({message: "usuário deletado"})
        }else{
            return res.status(404).send({message: "usuário não encontrado"})
        }
        
    }
}
export default usuarioController