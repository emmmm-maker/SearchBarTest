import { IloginId } from '@/types/user'
import request from '@/utils/request'

export const login = (data: IloginId) => {
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}
