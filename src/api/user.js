import request from "@/utils/request";

export function as_admin(token) {
  return request({
    url: "admin/adminLogin",
    method: "post",
    params: { token: token },
  });
}

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

// export function getInfo(token) {
//   return request({
//     url: "/vue-admin-template/user/info",
//     method: "get",
//     params: { token },
//   });
// }

export function logout() {
  return request({
    url: "/user/logout",
    method: "post",
  });
}
