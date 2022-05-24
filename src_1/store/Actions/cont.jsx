const add=(data)=>{
   return {type:'add',data}
}
const incream=(data)=>{
   return {type:'incream',data}
}
//异步action
const yibujian=(data,time)=>{
    return (dispatch)=>{
       setTimeout(() => {
             dispatch({type:'yibujian',data})
       }, time);
    }
}
export  {
    add,
    incream,
    yibujian
}