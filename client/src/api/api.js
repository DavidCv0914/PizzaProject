import axios from "axios";
import Cookie from "universal-cookie";

let url = "http://localhost:4000"
const cookie = new Cookie()
let token = cookie.get("token")

export const singUpUser = async(values) =>
    await axios.post(`${url}/auths/createUser`, values);

export const loginUser = async(values) =>
    await axios.post(`${url}/auths/login`, values);

export const dataUser = async() =>
    await axios.get(`${url}/dataUser`, {headers:{token:token}});