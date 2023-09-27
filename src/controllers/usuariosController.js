const usuariosCadastrados = []

class usuarioController{
    static criarUsuario(req, res){
        const novoUser = req.body
        novoUser.id = usuariosCadastrados.length
        usuariosCadastrados.push(novoUser)
        return res.status(201).send({message:"usuário criado"})
    }
    static listarUsuarios(req, res){
        res.status(200).send(usuariosCadastrados)
    }
    static listarUserPorId(req, res){
        const id = req.params.id
        res.status(200).send(usuariosCadastrados[id])
    }
    static atualizarUser(req, res){
        const id = req.params.id
        usuariosCadastrados[id] = req.body
        return res.status(200).send({message:"user atualizado"})
    }
}
//faça uma função pra atualizar 
export default usuarioController