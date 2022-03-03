import reqInstance from './request'
import mockServer from './mockRequest'
//暴露普通的请求函数
export const request = () =>  reqInstance.get('/api/product/getBaseCategoryList')
//暴露mock数据的请求函数
export const mockBanner = () => mockServer.get('/banner')
export const mockFloor = () => mockServer.get('/floor')