import request from "./request";
export function login(params) {
  return request({
    url: "/sercer",
    method: "GET",
    params,
  });
}

