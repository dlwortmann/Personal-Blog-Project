// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle')

toggleButton.addEventListener('click', () =>{
  document.body.classList.toggle('dark')
})



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage () {
  let tempStorage = []
  if (JSON.parse(localStorage.getItem('blogData')) === null) {
    return tempStorage 
  } 
  let tempItem = JSON.parse(localStorage.getItem('blogData'))
  //return tempStorage = JSON.parse(localStorage.getItem('blogData'))
  // console.log('tempItem: ' + tempItem)

}//readLocalStorage funtion should return an array of objects(all the old posts), storeLocalstorage function should call read local storage function []=readLocalStorage, all old post stored as an array. Store local storage should be pushing new post to the end of the old array defined by readLocalStorage


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (formData) {
  let postArray = []
  readLocalStorage()
  postArray = JSON.parse(localStorage.getItem('blogData'))
  console.log(typeof(tempItem))
  if  (username === '' || 
    title === ''|| 
    content === '') {
    errorMessage.textContent = "Please complete the form."
    // plug in variable.textContent = "Please complete the form."
    return false;
  }

  else {
    //Grab the form data and store it in local storage,
    console.log(formData)
    console.log(postArray)
    postArray.push(formData)
    localStorage.setItem('blogData', JSON.stringify(postArray))
    }

}


// ! Use the following function whenever you need to redirect to a different page
//let redirectURL = '';

//const redirectPage = function () {
  //redirectURL = window.location.href=
  //location.assign(url);
//}
