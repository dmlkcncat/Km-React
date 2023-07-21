import { get, postJSON } from './request'

export const getAll = () => get(`Comments/getall`)

export const add = (data) => postJSON('Comments/add', data)
