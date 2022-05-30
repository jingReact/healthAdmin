const initialState = {
    menuName: '首页',
    current: '123123数据'
}
export default (state = initialState, action) => {
    const {type,data} =action
    console.log('type', data) // 使用dispatch调用action中的方法会触发更新state 获取到action之后根据type的不同来更改不同的值    类似于action:{type: "SWITCH_MEUN", menuName: "订单管理"}
    switch (type) {
        case 'SWITCH_MEUN':
            return {
                ...state, // 保存上一个状态值的写法
                  menuName: action.menuName
            }
        case 'SWITCH_CURRENT':
            return {
                ...state, // 保存上一个状态值的写法
                current:action.current
            }
        default:
            return { ...state }

    }
}

