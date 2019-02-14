import axios from 'axios'
import config from './app-config'

const instance = axios.create({ baseURL: config.baseURL });

const get = (url, options = {}) => (
  instance.get(url, { params: { ...options }})
)

export {
  get
}

