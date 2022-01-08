let posts = JSON.parse(localStorage.getItem('posts'));
let comments = JSON.parse(localStorage.getItem('comments'));

for(const post of posts) {
    let postBodyDiv = document.createElement('div');
    postBodyDiv.innerText = JSON.stringify(post);
    document.body.append(postBodyDiv);

    for (const comment of comments) {
        if (comment.id === post.id) {
            let commentDiv = document.createElement('div')
            commentDiv.innerText = JSON.stringify(comment);
            document.body.append(commentDiv); break;
        }
    }
}