import { get } from './request'

export const getAll = () => get(`Products/getall`)
export const getById = (id) => get(`Products/getbyid?id=${id}`)