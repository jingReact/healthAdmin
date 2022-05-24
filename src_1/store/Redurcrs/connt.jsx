export default function conntAbout(prec = 0, action) {
    let { type, data } = action;
    switch (type) {
        case 'add':
            return prec += data
        case 'incream':
            return prec -= data
        case 'yibujian':
            console.log(prec, data)
            return prec += data
        default:
            return prec
    }
}
//reducer 处理redux状态