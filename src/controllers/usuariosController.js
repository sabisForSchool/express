import UserModel from "../models/Usuario.js"

class usuarioController{
    static criarUsuario(req, res){
        const novoUser = req.body
        UserModel.save(novoUser.name, novoUser.username, novoUser.password)
        
        return res.status(201).send({message:"usuário criado"})
    }
    static listarUsuarios(req, res){
        const users = UserModel.show()
        if(!users){
            return res.status(404).send({message: "Não há users cadastrados"})
        }
        return res.status(200).send(users)
    }
    static listarUserPorId(req, res){
        const id = req.params.id
        const user = UserModel.findById(id)

        if(user){
            return res.status(200).send(user)
        }
        return res.status(404).send({message: "usuário não encontrado"})
        
    }
    static atualizarUser(req, res){
        const id = req.params.id
        if(!req.body.name){
            return res.status(422).send({message:"O campo NAME é obrigatório"})
        }
        if(!req.body.username){
            return res.status(422).send({message:"o campo USERNAME é obrigatório"})
        }
        if(!req.body.password){
            return res.status(422).send({message:"o campo PASSWORD é obrigatório"})
        }

        const user = UserModel.update(id, req.body)
        if(!user){
            return res.status(404).send({message:"usuário não encontrado"})
        }
        return res.status(200).send({message:`usuário atualizado com sucesso`})
        
    }
    static deletar(req, res){
        const id = req.params.id
        if(!UserModel.destroy(id)){
            return res.status(200).send({message: "usuário não encontrado"})
        }
        return res.status(200).send({message: "usuário deletado com sucesso"})
        
    }
}
export default usuarioController