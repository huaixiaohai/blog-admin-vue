import request from '@/utils/request'

export function searchUser() {
  return request({
    url: '/search/author/list',
    method: 'get'
  })
}

export function transactionList(query) {
  return request({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  })
}
