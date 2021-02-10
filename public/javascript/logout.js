async function logoutUser() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        window.location = '/'
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#logout-btn').addEventListener("click", logoutUser)