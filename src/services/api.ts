import axios from 'axios';

export const api = axios.create({
 // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://app-money-react.vercel.app/api',

})
