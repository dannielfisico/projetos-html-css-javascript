import { login, logout } from "./auth";

const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', async e => {
    try {
        await login();
    }catch(error) {

    }
})