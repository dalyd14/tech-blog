function userLogin(event) {
    event.preventDefault()
    
    const username = document.getElementById('username-input').value
    const password = document.getElementById('password-input').value
    if (username && password) {
        loginUser(username, password)
    }
}

async function loginUser(username, password) {
    const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        window.location = '/'
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.login-form').addEventListener("submit", userLogin)