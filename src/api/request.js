import axios from 'axios'
const request = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 6000,
});
// 请求拦截
request.interceptors.request.use(
  (config) => {
    //请求头设置
    let token = localStorage.getItem("token") || "";
    config.headers.Authorization = token;
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// 响应拦截
request.interceptors.response.use(
  (arr) => {
    switch (arr.data.meta.status) {
      case 200:
     
        break;
      case 201:
       
        break;
      case 204:
       
        break;
      case 400:
       
        break;
      case 401:
       
        break;
      case 403:
      
        break;
      case 404:
       
        break;
      case 422:
        
        break;
      case 500:
        
        break;
    }
    return arr.data.data;
  },
  (err) => {
    console.log(err);
  }
);

export default  request