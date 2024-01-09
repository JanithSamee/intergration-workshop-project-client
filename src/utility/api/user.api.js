import axios from "axios";

const BASE_API = axios.create({ baseURL: "http://127.0.0.1:3000/api/v1" });

async function register({ username, password, email }) {
    return await BASE_API.post("/user/register", {
        username,
        password,
        email,
    });
}
async function login({ username, password }) {
    return await BASE_API.post("/user/login", {
        username,
        password,
    });
}

export { register, login };
