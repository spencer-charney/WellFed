export const list = () => {
    return fetch(`${process.env.API_URL}/posts`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listByUser = (userId, token) => {
    return fetch(`${process.env.API_URL}/posts/by/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const followingPosts = (token, following) => {
    
    let posts = []
    for (var i = 0; i < following.length; i++) {
        posts.push(listByUser(following[i], token));
    }   
    
}

export const createPost= (userId, token, post) => {
    return fetch(`${process.env.API_URL}/post/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const bookmark = (userId, token, postId) => {
    return fetch(`${process.env.API_URL}/post/bookmark`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const unbookmark = (userId, token, postId) => {
    return fetch(`${process.env.API_URL}/post/unbookmark`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const newComment = (userId, token, postId, comment) => {
    return fetch(`${process.env.API_URL}/post/comment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`${process.env.API_URL}/post/uncomment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, postId, comment })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createBook = (userId, token, name) => {
    return fetch(`${process.env.API_URL}/user/createBook`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, name })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const populateBook = (userId, bookId, token, postId) => {
    return fetch(`${process.env.API_URL}/user/populateBook`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, bookId, postId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
