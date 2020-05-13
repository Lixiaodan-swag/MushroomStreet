import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/data/home/multiData/multidata.json'
    })
}
export function getHomegood(type,page){
    return request({
        url:'/data/home/data/'+type+'/'+page+'.json'
    })
}