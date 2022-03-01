import reqInstance from './request'
export const fn = () =>  {
    return reqInstance({
        url:'/api/product/getBaseCategoryList',
        method:'get'
    })
}