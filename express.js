const express=require('express')
const app=express()
app.get('/sercer', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const user = {
        userName: 'admin',
        passWard:'admin',
    }
    response.end(JSON.stringify(user));
})
app.all('/home', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const userName={
        userName:15,
        passWard:18,
        number:1223,
        allmsg:990,
    }
    response.end(userName)
})

app.listen(8000,()=>{
    console.log('服务已经启动了')
})