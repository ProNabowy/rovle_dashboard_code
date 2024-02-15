import Swal from "sweetalert2";

const isPermissionIncluded = (arr, permission) => {
    return arr?.includes(permission);
}

// Function to check route permissions based on user roles and permissions
const hasRoutePermissions = (userPermissions, pagePermission) => {
    // Check if user is logged in
    if (loggedIn()) {

        // Check if pagePermission is included in the combined array of user permissions and static routes
        if (isPermissionIncluded(userPermissions, pagePermission)) return true;

    } else {
        // User is not logged in

        // Define static routes for non-logged-in users
        const staticRoutes = ['login', 404];

        // Check if pagePermission is included in static routes
        if (isPermissionIncluded(staticRoutes, pagePermission)) return true;
    }

    // If none of the conditions are met, return false
    return false;
}

// Function to set a secure cookie
function setSecureCookie(name, value, hoursToExpire = 1, sameSite = 'Strict') {
    const date = new Date();
    date.setTime(date.getTime() + (hoursToExpire * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const secure = location.protocol === 'https:' ? 'Secure' : '';
    const cookieString = `${name}=${value}; ${expires}; path=/; ${secure}; SameSite=${sameSite}`;
    document.cookie = cookieString;
}


// Ensures that the last clicked time triggers the function to prevent rapid successive calls.
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), 500);
    };
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Example: Get the value of the 'exampleCookie' cookie
// const exampleCookieValue = getCookie('exampleCookie');

const loggedIn = () => {
    return getCookie('token') ? true : false;
}


class SwalControlar {

    constructor() {

    }

    success(title, message) {

        return Swal.fire({
            icon: 'success',
            title: title || 'Good...',
            text: message,
        })

    }

    warning(title, message) {

        return Swal.fire({
            icon: 'warning',
            title: title || 'Warning...',
            text: message,
        })

    }

    rejected(title, message) {

        return Swal.fire({
            icon: 'error',
            title: title || 'Oops...',
            text: message,
        });

    }
};

// Handle User Logout
const handleLogOut = () => {

    window.localStorage.clear();

    // To Remove Token From Cookies
    setSecureCookie('token', null, -1);

    return window.location.reload();

}

// Acsspet List And Get the Current Option Form This List
const getSelectedOption = (list, optionKey, value) => {
    return list?.filter(item => item[optionKey] == value)[0];
}

const handleDelete = (callback) => {

    Swal.fire({
        title: '¿Estás seguro/a?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancel",
        confirmButtonText: "Sí, bórralo."
    }).then((result) => {

        if (result.isConfirmed) callback();

    })

}

export {
    hasRoutePermissions,
    setSecureCookie,
    loggedIn,
    debounce,
    getCookie,
    handleLogOut,
    SwalControlar,
    getSelectedOption,
    handleDelete
}