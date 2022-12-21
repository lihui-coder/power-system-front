import { get } from '../config'

export default {
    getInfo: (config) => {
        const { url } = config
        return get({url})
    }
}
