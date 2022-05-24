import request from "./params";
export function login(params) {
  return request({
    url: "http://127.0.0.1:8000/sercer",
    method: "GET",
    params,
  });
}