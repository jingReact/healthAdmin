const express=require('express')
const app=express()
app.get('/sercer', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const user = {
        stat: 1,
        data: [
            {a:1,b:2}
        ]
    }
    response.end(JSON.stringify(user));
})
app.post('/sercer/login', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const userName={
        userName:'admin',
        passWard:'admin',
    }
    response.end(userName)
})

app.listen(8000,()=>{
    console.log('服务已经启动了')
})