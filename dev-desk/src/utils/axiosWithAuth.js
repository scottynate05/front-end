import axios from 'axios';

const axiosWithAuth = () => {
<<<<<<< HEAD
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://devdesk-queue-2.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
=======
    return (
        <>
            <h1>Hella</h1>
        </>
    )
>>>>>>> 8a0f90897cebfbf86d8fe0dc220ff92d67332d34
}

export default axiosWithAuth;