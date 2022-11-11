import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.220.130:3333'
});