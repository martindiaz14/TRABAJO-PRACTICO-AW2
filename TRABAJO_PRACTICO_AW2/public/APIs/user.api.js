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

export const UserLogin = async (email, password) => {
    try {
        const res = await fetch(`${API}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error en UserLogin:", error);
        return null;
    }
};
