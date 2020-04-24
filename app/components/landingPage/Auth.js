export const signup = user => {
    if (typeof window !== 'undefined') localStorage.removeItem('jwt');
    return fetch(`${process.env.API_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signin = user => {
    if (typeof window !== 'undefined') localStorage.removeItem('jwt');
    return fetch(`${process.env.API_URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const authenticate = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(jwt));
        next();
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') localStorage.removeItem('jwt');
    return fetch(`${process.env.API_URL}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout', response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const isAuthenticated = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};

export const getUser = (userId, token) => {
    return fetch(`${process.env.API_URL}/user/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getUsername = (username, token) => {
    return fetch(`${process.env.API_URL}/user/username`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({username})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const searchUser = (username, token) => {
    console.log("SEARCHING FOR USER: "+ username);
    return fetch(`${process.env.API_URL}/user/search`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({username})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const followUser = (userId, followId, token, username) => {
    return fetch(`${process.env.API_URL}/user/follow`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, followId, username})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const unfollowUser = (userId, unfollowId, token) => {
    return fetch(`${process.env.API_URL}/user/unfollow`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, unfollowId})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}