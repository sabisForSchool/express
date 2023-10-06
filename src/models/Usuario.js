import {v4 as uuidv4} from "uuid"
class Usuarios {
    users = []

    save(name, username, password){
        const user = {
            id: uuidv4(),
            name: name,
            usernmae: username,
            password: password
        }
        this.users.push(user)
        
    }
    findById(id){
        const user = this.users.find((user) => user.id == id)
        if(user){
            return user
        }else{
            return false
        }
    }
    show(){
        if(this.users.length == 0){
            return false
        }else{
            return this.users
        }
    }
    update(id, novosDados){
        const user = this.users.find((user)=> user.id == id)
        if(!user){
            false
        }

        user.name = novosDados.name
        user.username = novosDados.username
        user.password = novosDados.password
        return true
    }
    destroy(id){
        const user = this.users.find((user)=>user.id == id)
        if(!user){
            return false
        }
        const index = this.users.indexOf(user)
        this.users.splice(index, 1)
        return true
    }
}
export default new Usuarios()
