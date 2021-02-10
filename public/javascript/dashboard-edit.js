function saveChanges(event) {
    event.preventDefault();

    resetIdleTimer()

    const postId = event.target.closest('form').dataset.post
    const postTitle = document.getElementById('post-title').value
    const postContent = document.getElementById('post-content').value

    updatePost(postId, postTitle, postContent)
}

async function updatePost (postId, title, content) {

    resetIdleTimer()

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'put',
        body: JSON.stringify({
            title: title,
            post_content: content
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        goToDashboard() 
    } else {
        console.log(response)
        alert(response.statusText)
    }
}

async function deletePost(event) {

    resetIdleTimer()
    
    event.preventDefault();
    const postId = event.target.closest('form').dataset.post
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'delete'
    })

    if (response.ok) {
        goToDashboard()
    } else {
        console.log(response)
        alert(response.statusText)
    }
}

function goToDashboard() {
    window.location = '/dashboard'
}

document.querySelector('.edit-post-form').addEventListener('submit', saveChanges)
document.getElementById('delete-post-btn').addEventListener('click', deletePost)
document.getElementById('cancel-btn').addEventListener('click', goToDashboard)