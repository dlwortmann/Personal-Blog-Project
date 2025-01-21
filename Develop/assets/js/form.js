// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission.
function formSubmission(event) {
    let formData = {
        username: "",
        title: "",
        content: ""
    }
    event.preventDefault();
    let blogData = JSON.parse(localStorage.getItem('blogData')) || []

    const username = document.getElementById('username').value
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    
    if (!username || !title || !content) {
        alert("Please complete the form")
        return;
    }
//Grab the form data and store it in local storage,
    formData.username = username
    formData.title = title
    formData.content = content
    blogData.push(formData)
    localStorage.setItem('blogData', JSON.stringify(blogData))
    
    redirectPage() 
}    
 
function redirectPage() {
    window.location.href="./blog.html"
}
//  then redirect to the blog page using the `redirectPage` function. 
//If the form is submitted with missing data, display an error message to the user.



// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.getElementById('formInput').addEventListener('submit', formSubmission)