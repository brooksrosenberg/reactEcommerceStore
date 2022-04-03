import axios from 'axios'

const BASE_URL = "/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDhiODUxYmIzZjkwMDAxNjQ2OTk0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODkzMjk4OCwiZXhwIjoxNjQ5MTkyMTg4fQ.Y-Scc0a_HPeLaA4qqluLu2La3NAqaLp4Ku843zE4S5U"

// const Token = localStorage.getItem("token")

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})