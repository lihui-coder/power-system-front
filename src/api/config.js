import axios from "axios";

axios.defaults.timeout = 30000

axios.interceptors.request.use(
    config => {
        const token = true
        if(token){
            config.headers.auth = token
        }
        return config
    },
    error => {
        return Promise(error)
    }
)

async function request(config){
    try {
        const { data } = await axios(config)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export function get(url){
    return request({ url })
}

export function post(url){
    return request({ url })
}