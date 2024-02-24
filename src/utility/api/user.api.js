import axios from "axios";
const base_user = import.meta.VITE_BASE_URL;
const BASE_API = axios.create({
    baseURL: base_user || "http://127.0.0.1:3000/api/v1",
});

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
async function getUserData(token) {
    return await BASE_API.get("/user/get", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}

export { register, login, getUserData };
