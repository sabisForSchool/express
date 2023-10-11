export default function midddleware(req, res, next){
    const authBruta = req.headers.authorization.split(" ")[1]
    const auth = Buffer.from("encoded", "base64").toString

    if(!authBruta){
        return res.status(500).send({message: "Você está se token faça login"})
    }
    console.log(auth)
    next()
}
//n está pronto