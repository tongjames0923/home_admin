import request from "@/utils/request";

export interface BaseUserInfo {
  id: number,
  name: string,
  phone: string,
  sex: number
}

export interface LoginResp {
  loginId: number,
  userInfo: BaseUserInfo,
}


export function as_admin(token: string) {
  return request({
    url: "admin/adminLogin",
    method: "post",
    params: {token: token},
  });
}

export function myInfo()
{
  return request({
    url:'/user/getMyInfo',
    method:'get'
  })
}

export function login(data: { name: string; password: string; }) {
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
