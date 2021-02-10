document.querySelector('div.posts-container').addEventListener("click", function(event) {
    const post = event.target.closest('.outer')
    if (post) {
        window.location = '/posts/' + post.dataset.post
    }
})