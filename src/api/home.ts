import request from "@/utils/request";

export function listMyHomes() {
  return request({
    url: '/home/listMyGroup',
    method:'get'
  })
}
export function setHome(homeId:Number)
{
  return request({url:'/user/setHomeGroup',params:{homeId:homeId},method:'get'})
}
