import { API_BASE } from '../config/index';
import axios from 'axios';

axios.defaults.baseURL = API_BASE;

export default {
    Post(link, body, token) {
        return axios.post(`${link}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },
    Put(link, body, token) {
        return axios.put(`${link}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },
    Patch(link, body, token) {
        return axios.patch(`${link}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },
    Get(link, token) {
        return axios.get(`${link}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },
    Delete(link, token) {
        return axios.delete(`${link}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },

}
