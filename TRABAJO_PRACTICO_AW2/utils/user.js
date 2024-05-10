import{readFile} from 'fs/promises'


const fileUser = await readFile('./DATA/usuarios.json', 'utf-8')
const UserData = JSON.parse(fileUser);

export const get_user_byId = (id)=>{
     return UserData.find(e=> e.id === id)
}