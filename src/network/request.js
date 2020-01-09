import axios from 'axios'

export function request(config){
    // 1、 创建Axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000/api/w1',
      timeout: 5000
    })
    // 发送真正的网络请求(返回的直接就是个promise对象)
    return instance(config)
}