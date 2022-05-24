import http  from "./request";
export default function request({
  method = "get",
  url,
  data = {},
  params = {},
}) {
  return http({
    method,
    url,
    data,
    params,
  });
}
