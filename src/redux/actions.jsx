const add =(data)=>{
    return {type:add,data}
}
const jian =(data)=>{
    return {type:jian,data}
}
const weijian =(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            return jian()
        },time)
    }
}