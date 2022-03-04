import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const reqInstance = axios.create({
    // baseURL:'/api',
    timeout:5000
})
reqInstance.interceptors.request.use((config) => {
    nprogress.start()
    return config
})
reqInstance.interceptors.response.use((resolve) => {
    nprogress.done()
    console.log('数据响应');
    return resolve
},(reject) => {
    return reject
})
export default reqInstance