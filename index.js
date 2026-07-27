const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feeling a bit stressed tbh",
        likes: "12,502"
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: "15,137"
    }
];

const main = document.querySelector("main");

main.innerHTML = "";

posts.forEach(post => {
    main.innerHTML += `
        <section>
            <div class="container">

                <div class="user-info">
                    <img class="usr-avatar" src="${post.avatar}" alt="">
                    <div class="info">
                        <h1>${post.name}</h1>
                        <p>${post.location}</p>
                    </div>
                </div>

                <div class="post">
                    <img class="post-img" src="${post.post}" alt="">
                </div>

                <div class="icons">
                    <img class="heart" src="images/icon-heart.png" alt="">
                    <img class="comment" src="images/icon-comment.png" alt="">
                    <img class="dm" src="images/icon-dm.png" alt="">
                </div>

                <div class="engagments">
                    <h2 class="likes-count">${post.likes} likes</h2>

                    <ul class="comments">
                        <li>
                            <span class="user-comment">${post.username}</span>
                            ${post.comment}
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    `;
});