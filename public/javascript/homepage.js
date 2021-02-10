document.querySelector('div.posts-container').addEventListener("click", function(event) {
    const post = event.target.closest('.post')
    if (post) {
        window.location = '/posts/' + post.dataset.post
    }
})