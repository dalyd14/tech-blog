document.querySelector('div.posts-container').addEventListener("click", function(event) {
    const post = event.target.closest('.outer')
    if (post) {
        window.location = '/dashboard/edit/' + post.dataset.post
    }
})

function togglePost() {
    const postForm = document.querySelector(".add-post")
    const startPostBtn = document.querySelector("#start-new-post-btn")

    if (postForm.classList.contains('d-none')) {
        postForm.classList.remove('d-none')
    } else {
        postForm.classList.add('d-none')
    }

    if (startPostBtn.classList.contains('d-none')) {
        startPostBtn.classList.remove('d-none')
    } else {
        startPostBtn.classList.add('d-none')
    }
}

async function addPost(event) {
    event.preventDefault();

    const postTitle = document.querySelector('#post-title').value.trim()
    const postText = document.querySelector('#post-content').value.trim()

    console.log(postText, postTitle)
    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title: postTitle,
            post_content: postText
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        location.reload()
    } else {
        alert(response.statusText)
        location.reload()
    }
}

document.getElementById("start-new-post-btn").addEventListener("click", togglePost)
document.getElementById("cancel-post-btn").addEventListener("click", togglePost)
document.querySelector(".add-post").addEventListener("submit", addPost)