import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.36.130:3333'
});