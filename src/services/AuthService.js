import {api} from '../API/api'

export const login = async (email, password) => {
    let formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    const response = await api.post('http://localhost/login.php', formData)

    const {status, data} = response.data

    if(status === 'success') {
        localStorage.setItem('user', JSON.stringify({
            'token': data.token,
            'expiration': data.expiration,
        }))
    }else{
        throw data
    }
    return data
}

export const isAuthenticated = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user){
        return false
    }

    if(!user.token || !user.expiration){
        return false
    }

    const expiration = new Date(user.expiration)
    const now = new Date()

    return now < expiration
}