// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main')
const backButton = document.querySelector('#back')

backButton.addEventListener("click", function () {
    redirectPage("./index.html")
})

// TODO: Create a function that builds an element and appends it to the DOM
function buildElements(blogPost) {
    
    console.log(blogPost)
    for (let i = 0; i < blogPost.length; i++) {
        const addPost = blogPost[i];

        const article = document.createElement('article');
        article.textContent = addPost.username;

        const h2 = document.createElement('h2')
        h2.textContent = addPost.title

        const p = document.createElement('p')
        p.textContent = addPost.content;

        mainEl.appendChild(article)
        article.appendChild(h2)
        article.appendChild(p)

    }
}
//buildElements()
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {
   alert('No Blog posts yet...')
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let blogPost = readLocalStorage()
    if (blogPost == null || blogPost.length === 0) {
        noPosts()
    } else buildElements(blogPost)

}
// TODO: Call the `renderBlogList` function
renderBlogList()

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function () {
    redirectPage('index.html')
})
