import request from "./request";
export function login(params) {
  return request({
    url: "/sercer",
    method: "GET",
    params,
  });
}
export  function allAbout(params){
  return  request({
      method:'GET',
      url:'/about',
      params,
  })
}
