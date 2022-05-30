const initState = {
  isLogin: false,
  menuList: [],
};
const redurce= function (state = initState, action) {
  const { type, data } = action;
  switch(type){
        case 'SET_LOGIN_STATUS':
        	// 在不改变原有的state基础上，返回一个新的state
            return {
                ...state,
                isLogin:data
            }
        case 'SET_MENU_LIST':
            return {
                ...state,
                menuList:data
            }
        default:
            return initState    
    }

  }
export default redurce;