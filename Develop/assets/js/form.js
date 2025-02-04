// TODO: Create a variable that selects the form element




// TODO: Create a function that handles the form submission.
function formSubmission(event) {
    event.preventDefault();
    let formData  = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
        
    }
    storeLocalStorage(formData)
    //if (JSON.parse(localStorage.getItem('blogData')) === null) {
        //localStorage.setItem('blogData', JSON.stringify(formData))
    //}
    toBlogPage() //  then redirect to the blog page using the `redirectPage` function. 

}    
 
function redirectPage() {
    window.location.href="./blog.html"
}


//If the form is submitted with missing data, display an error message to the user.




// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.getElementById('formInput').addEventListener('submit', formSubmission)
