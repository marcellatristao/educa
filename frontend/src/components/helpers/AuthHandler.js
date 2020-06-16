import Cookies from 'js-cookie'; 

// Function that verify if is Logged
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

// Function to do Login (create token)
export const doLogin = (token) => {
    Cookies.set('token', token);
}

// Function to do Logout (remove token)
export const doLogout = () => {
    Cookies.remove('token');
}