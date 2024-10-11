import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://chat-box-three-omega.vercel.app'
})

const UseAxios = () => {
    return axiosPublic
};

export default UseAxios;