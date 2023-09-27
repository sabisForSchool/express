const usuariosCadastrados = []

function usuarioExiste(novoUser){
    for(let user in usuariosCadastrados){
        if(user.username == novoUser.username){
            return true
        }
    }
    return false
}
class usuarioController{
    static criarUsuario(req, res){
        const novoUser = req.body
        if(usuarioExiste(novoUser)){
            res.status(404).send({message: "Esse username já existe, utilize outro"})
        }else{
            usuariosCadastrados.push(novoUser)
            return res.status(201).send({message: "Usuário criado"})
        }
    }
    static listarUsuarios(req, res){
        res.status(200).send(usuariosCadastrados)
    }
    static listarUserPorId(req, res){
        const username = req.params.username
        for(let usuario in usuariosCadastrados){
            if(usuario.username == username){
                return res.status(200).json(usuario)
            }
        }
        return res.status(404).send({message: "Erro a buscar usuário, esse user name não existe no sistema"})
    }
}
//faça uma função pra atualizar 
export default usuarioController