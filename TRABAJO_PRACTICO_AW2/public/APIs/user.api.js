import { API } from "./api.js";


export const NewUser = async (NewUserData) => {

    try {
        const res = fetch(`${API}/user/create`, {
            method: 'POST',
            body: JSON.stringify(NewUserData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
return res
    } catch (error) {
console.log(error)
    }

}