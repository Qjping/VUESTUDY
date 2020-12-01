import request from '@/util/request'

export default function getgroup (groupid) {
  return request({
    url: '/config/' + groupid,
    method: 'get'
  })
}
