import {api} from '../API/api'

export const login = async (email, password) => {
    let formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    const response = await api.post('http://localhost/login.php', formData)

    const {status, data} = response.data

    if(status === 'success') {
        localStorage.setItem('user', JSON.stringify(data))
    }else{
        throw data
    }
    return data
}