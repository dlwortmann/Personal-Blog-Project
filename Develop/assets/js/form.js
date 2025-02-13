// TODO: Create a variable that selects the form element.

const formElement = document.getElementById('formInput')

const blogPost = {
    username: "",
    title: "",
    content: ""
}
//let blogPosts = JSON.stringify(blogPost)
//let blogPosts = readLocalStorage();


// TODO: Create a function that handles the form submission.
function formSubmission(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username').value
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value

    if (!username || !title || !content ) {
        alert("Please complete the form.");
        return;
    }
     
    blogPost.username = username;
    blogPost.title = title;
    blogPost.content = content;

    storeLocalStorage(blogPost)
    
    redirectPage("./blog.html");
   
}
 

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", formSubmission)