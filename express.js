const express = require('express')
const app = express()
app.get('/sercer', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const user = {
        userName: 'admin',
        passWard: 'admin',
    }
    response.end(JSON.stringify(user));
})
app.all('/about', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const userName = {
        num1: 15,
        num2: 18,
        num3: 1223,
        num4: 990,
    }
    response.end(JSON.stringify(userName))
})
app.get('/home', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const userName = {
        userName: 15,
        passWard: 18,
        number: 1223,
        allmsg: 990,
    }
    response.end(JSON.stringify(userName))
})
app.listen(8000, () => {
    console.log('服务已经启动了')
})