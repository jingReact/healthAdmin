// let prePeople=[{name:'张三',age:'12'}]
export default function AddPeople(prePeople=[{name:'张三',age:'12'}],action){
    let {type,data}=action
    switch (type) {
        case "addPeropleActions":
            return [data,...prePeople]
            default:
            return prePeople
    }
}