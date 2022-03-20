import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';
  
const baseURL = 'https://darshita-gommt.github.io/AppData/';

export const getData = () => {
    axiosInstance.get(baseURL + 'userData.json').then(response => {
        console.log('Response', response);
    }).catch(console.error)
}