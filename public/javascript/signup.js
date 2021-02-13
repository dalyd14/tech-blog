function userSignup(event) {
    event.preventDefault()

    const username = document.getElementById('username-input').value
    const password = document.getElementById('password-input').value
    if (username && password) {
        createUser(username, password)
    }
}

async function createUser(username, password) {
    const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if(response.ok) {
        window.location = '/dashboard'
    } else {
        console.log(response)
        alert(response.statusText)
    }
}

document.querySelector('.signup-form').addEventListener("submit", userSignup)