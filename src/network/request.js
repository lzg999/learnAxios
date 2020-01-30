import axios from 'axios'

export function request(config){
    // 1、 创建Axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000/api/hy',
      timeout: 5000
    })

    // 2、Axios的拦截器

    // 2.1 请求拦截
    instance.interceptors.request.use(config => {
      // 1、比如config中的配置信息不符合服务器要求，进行转化

      // 2、比如每次发送网络请求是需要在界面显示一个网络请求图标（show），然后再响应拦截里面进行隐藏

      // 3、比如某些网络请求信息需要携带一些特殊的信息（比如登陆（token））
      // console.log(config)
      return config
    },err => {
      console.log(err)
    })

    // 2.2、响应拦截
    instance.interceptors.response.use( res => {
      // console.log(res)
      return res.data
    }, err => {
      console.log(err)
    })


    // 3、发送真正的网络请求(返回的直接就是个promise对象)
    return instance(config)
}