import axios from "axios";

const instance = axios.create({
    baseURL:'/nhentai',
    timeout:2000,
});

// 2.请求拦截器
instance.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    config.headers = {
        'Content-Type':'application/json' //配置请求头
    }
    return config
}, error => {
    Promise.reject(error)
})

// 3.响应拦截器
instance.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response.data
})

export default instance;
