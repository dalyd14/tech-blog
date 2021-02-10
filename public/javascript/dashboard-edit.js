function saveChanges(event) {
    event.preventDefault();
    const postId = event.target.closest('form').dataset.post
    const postTitle = document.getElementById('post-title').value
    const postContent = document.getElementById('post-content').value

    updatePost(postId, postTitle, postContent)
}

async function updatePost (postId, title, content) {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'put',
        body: JSON.stringify({
            title: title,
            post_content: content
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        window.location = '/dashboard' 
    } else {
        console.log(response)
        alert(response.statusText)
    }
}

async function deletePost(event) {
    event.preventDefault();
    const postId = event.target.closest('form').dataset.post
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'delete'
    })

    if (response.ok) {
        window.location = '/dashboard'
    } else {
        console.log(response)
        alert(response.statusText)
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', saveChanges)
document.getElementById('delete-post-btn').addEventListener('click', deletePost)