const USERS_API_URL = 'http://172.16.101.161:8888/users';
const REGISTER_PATH = '/register';
const LOGIN_PATH = '/login';
const LOGOUT_PATH = '/logout';

export const registerUser = async (name: string, email: string, password: string): Promise<Response> => {
    const response =  await fetch(`${USERS_API_URL}${REGISTER_PATH}`, {
        method: 'POST',
        headers: {Accept: 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    return response
}

export const loginUser = async (name: string, password: string): Promise<Response> => {
    const response = await fetch(`${USERS_API_URL}${LOGIN_PATH}`, {
        method: 'POST',
        headers: {Accept: 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            password: password
        })
    })
    return response
}

export const logOutUser = async (): Promise<Number> => {
    const response = await fetch(`${USERS_API_URL}${LOGOUT_PATH}`, {
        method: 'POST',
        headers: {Accept: 'application/json','Content-Type': 'application/json'}
    })
    return response.status
}