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

export const generateOrder = async(values) =>
    await axios.get(`${url}/generateOrder`,values, {headers:{token:token}});

// Menu 

export const getMenu = async() =>
    await axios.get(`${url}/getPizzas`);

export const getMenuSize = async(size) =>
    await axios.get(`${url}/getPizzas/${size}`);

export const getMenuSoda = async() =>
    await axios.get(`${url}/getSodas`);

export const getMenuSodaSize = async(size) =>
    await axios.get(`${url}/getSodas/${size}`);

export const getMenuSodaType = async(type) =>
    await axios.get(`${url}/getSodasType/${type}`);

export const getMenuSodaAll = async(type,size) =>
    await axios.get(`${url}/getSodasType/${type}/${size}`);