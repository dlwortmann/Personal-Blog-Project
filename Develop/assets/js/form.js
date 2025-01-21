// TODO: Create a variable that selects the form element
let formInput = [
    username: "",
    title: "",
    content: ""
]
// TODO: Create a function that handles the form submission.
function formSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    
    if (!username || !title || !content) {
        alert("Please complete the form")
        return;
    }
//Grab the form data and store it in local storage,
    else {
    formInput.username = username
    formInput.title = title
    formInput.content = content
    localStorage.setItem('formInput', JSON.stringify(formInput))
    }
}

//  then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.



// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
