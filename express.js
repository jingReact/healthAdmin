const express=require('express')
const app=express()
app.get('/sercer',(request,response)=>{
    response.end('oook')
})
app.post('/sercer/login',(request,response)=>{
    const userName={
        userName:'admin',
        passWard:'admin',
    }
    response.end(userName)
})

app.listen(8000,()=>{
    console.log('服务已经启动了')
})