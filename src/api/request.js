import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const reqInstance = axios.create({
    // baseURL:'http://39.98.123.211',
    timeout:5000
})
reqInstance.interceptors.request.use((config) => {
    nprogress.start()
    return config
})
reqInstance.interceptors.response.use((resolve) => {
    nprogress.done()
    console.log(resolve);
},(reject) => {
    console.log(reject);
})
export default reqInstance