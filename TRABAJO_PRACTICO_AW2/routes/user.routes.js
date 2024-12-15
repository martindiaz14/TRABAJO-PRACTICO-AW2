import { Router } from "express";
import { readFile, writeFile } from 'fs/promises';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { createUser, findUser } from "../db/actions/users.actions.js";

dotenv.config()

const fileUser = await readFile('./DATA/usuarios.json', 'utf-8')
const UserData = JSON.parse(fileUser);

const router = Router();

const SECRET = process.env.SECRET

router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const result = await findUser(email)

    if (!result) {
        return res.status(404).json({ status: false })
    }
    const control = bcrypt.compareSync(password, result.password)

    if (!control) {
        return res.status(401).json({ status: false })
    }


    const token = jwt.sign({ ...result }, SECRET, { expiresIn: 86400 })

    const data = {
        name: result.name,
        lastname: result.lastname,
        email: result.email,
        status: true,
        token: token
    }
    console.log(data)
    res.status(200).json(data)

})


router.post('/create', async (req, res) => {
    const { name, lastname, email, password } = req.body;

    try {
        const cryppass = bcrypt.hashSync(password, 8);

        const result = await createUser({ name, lastname, email, password: cryppass });
        
        res.status(200).json({ status: true, message: "Usuario creado exitosamente." });

    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                status: false,
                message: "Error: El email ya está registrado."
            });
        } else {

            console.error("Error no controlado:", error);
            res.status(500).json({
                status: false,
                message: "Error interno del servidor. Inténtelo más tarde."
            });
        }
    }
});




export default router