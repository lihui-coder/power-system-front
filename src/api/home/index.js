import { get } from '../config'

export default {
    login: (config) => {
        const { url } = config
        return get({url})
    }
}
