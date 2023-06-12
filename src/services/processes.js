import { get } from './request'

export const getAll = () => get(`Processes/getall`)
export const getById = (id) => get(`Processes/getbyid?id=${id}`)