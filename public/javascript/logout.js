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

var globalIdleTimer = setTimeout(logoutUser, 1000 * 60 * 10)

function resetIdleTimer() {
    clearTimeout(globalIdleTimer)
    globalIdleTimer = setTimeout(logoutUser, 1000 * 60 * 10)
}

document.querySelector('#logout-btn').addEventListener("click", logoutUser)