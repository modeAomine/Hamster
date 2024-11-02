import axios from "axios"

let url: string

if (process.env.REACT_APP_ENV === 'debug') {
    url = 'https://bd3e-85-174-199-63.ngrok-free.app'
} else {
    url = '/api'
}

export const auth = async (userData: string) => {
    try {
        const response = await axios.post(url + '/auth', {
            _auth: userData
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data
    } catch (error) {
        console.error('Ошибка авторизации пользователя: ', error)
        throw error
    }
}

export const get_user = async (token: string) => {
    try {
        const response = await axios.get(url + '/user', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        console.error('Ошибка получения данных пользователя: ', error)
    }
}

export const bet_history = async (token: string) => {
    try {
        const response = await axios.get(url + '/bet_history', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(`Ошибка получения данных о ставках: ${error}`)
    }
}

export const payment_history = async (token: string) => {
    try {
        const response = await axios.get(url + '/payment_history', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(`Ошибка получения истории пополнений: ${error}`)
    }
}

export const withdrawal_history = async (token: string) => {
    try {
        const response = await axios.get(url + '/withdrawal_history', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(`Ошибка получение истории вывода: ${error}`)
    }
}