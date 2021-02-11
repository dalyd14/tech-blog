function toggleComment() {
    if (typeof resetIdleTimer !== 'undefined') {
        resetIdleTimer()
    }

    const commentForm = document.querySelector(".add-comment")
    const startCommentBtn = document.querySelector("#start-new-comment-btn")

    if (commentForm.classList.contains('d-none')) {
        commentForm.classList.remove('d-none')
    } else {
        commentForm.classList.add('d-none')
    }

    if (startCommentBtn.classList.contains('d-none')) {
        startCommentBtn.classList.remove('d-none')
    } else {
        startCommentBtn.classList.add('d-none')
    }
}

async function addComment(event) {
    event.preventDefault();

    if (typeof resetIdleTimer !== 'undefined') {
        resetIdleTimer()
    }

    const commentText = document.querySelector('#comment-content').value.trim()
    const postId = document.querySelector('.outer').dataset.post

    console.log(commentText, postId)
    const response = await fetch('/api/comments', {
        method: 'post',
        body: JSON.stringify({
            comment_text: commentText,
            post_id: postId
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        location.reload()
    } else {

        alert(response.statusText)
    }
}

document.getElementById("start-new-comment-btn").addEventListener("click", toggleComment)
document.getElementById("cancel-comment-btn").addEventListener("click", toggleComment)
document.querySelector(".add-comment").addEventListener("submit", addComment)