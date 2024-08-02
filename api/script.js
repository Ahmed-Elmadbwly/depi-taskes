async function getPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

async function displayPostsIntoCard() {
    getPosts()
        .then(posts => {
            let row = document.querySelector('.row');
            for (let post of posts) {
                row.innerHTML += `
                <div class="col-lg-4 col-md-12 mt-4">
                    <div class="card text-center">
                        <div class="card-header bg-dark p-3 text-light">
                            ${post.title}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title w-25 mx-auto border border-primary shadow-lg p-1 mb-1 opacity-75 rounded text-warning bg-dark fs-2">
                                ${post.id}
                            </h5>
                            <p class="card-text bg-dark text-light">${post.body}</p>
                            <a href="https://jsonplaceholder.typicode.com/posts" class="btn btn-warning fs-4 shadow rounded opacity-75">Go Json Placeholder</a>
                        </div>
                    </div>
                </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            let row = document.querySelector('.row');
            row.innerHTML = '<p class="text-danger">Failed to load posts. Please try again later.</p>';
        });
}

displayPostsIntoCard();


