import axios from 'axios'
import { message } from 'antd';
import { Navigate } from 'react-router-dom';
const request = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 6000,
});
// 请求拦截
request.interceptors.request.use(
  (config) => {
    //请求头设置
    // let token = localStorage.getItem("token") || "";
    // config.headers.Authorization = token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
request.interceptors.response.use((response) => {
  if (response.status === 200) {
      return Promise.resolve(response);
  } else {
      return Promise.reject(response);
  }
}, (error) => {
  if (error.response.status) {
      switch (error.response.status) {
          // 401: 未登录
          case 401:
            Navigate(`/login`, {
              replace: false,
          })
              break;
              // 403 token过期
              // 登录过期对用户进行提示
              // 清除本地token和清空vuex中token对象
              // 跳转登录页面                
          case 403:
            message.error('登陆失效');
              // 清除token
              window.sessionStorage.clear();
              // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
              Navigate(`/login`, {
                replace: false,
            })
              break;
              // 404请求不存在
          case 404:
            console.log(111)
            message.error('网络请求不存在');
              break;
              // 其他错误，直接抛出错误提示
          default:
            message.error('其它错误');
      }
      return Promise.reject(error.response);
  } else {
      return Promise.reject(error)
  }
})
export default  request