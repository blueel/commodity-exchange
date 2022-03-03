import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const mockRequest = axios.create({
    baseURL:'/mock',
    timeout:5000
})
mockRequest.interceptors.request.use((config) => {
    nprogress.start()
    return config
})
mockRequest.interceptors.response.use((resolve) => {
    nprogress.done()
    return resolve
},(reject) => {
    return reject
})
export default mockRequest