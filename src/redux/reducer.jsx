export default function reducer(prec=0,action) {
    let {type,data}=action;
    switch (type) {
        case 'add':
        console.log(prec)
           return prec+=data
           case 'jian':
           return prec-=data
            case 'weijian':
            console.log(prec,data)
           return prec+=data
         default:
         return prec
            break;
    }
}