import axios from 'axios'


export function request(config){
    const axios1=axios.create({
        // baseURL:"",
        timeout:5000
        
    })

        // axios1.interceptors.request.use(config=>{
        // return config
        // },err=>{
        //     console.log(err)
        //   })       
            //响应式拦截4
        axios1.interceptors.response.use(res=>{        
        return res.data
        })
        return axios1(config)
}

