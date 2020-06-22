import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://devdesk-queue-2.herokuapp.com/api",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default axiosWithAuth;