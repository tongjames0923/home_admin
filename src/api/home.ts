import request from "@/utils/request";

export function listMyHomes() {
  return request({
    url: '/home/listMyGroup'
  })
}
